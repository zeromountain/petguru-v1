import { Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.model';
import { IRequest } from '../interfaces/request.interfaces';

const authCtrl = {
  register: async (req: IRequest, res: Response) => {
    const { email, password, nickname } = req.body;
    try {
      // 이메일 중복 검사
      const user_email = await User.findOne({ email });
      if (user_email)
        return res.status(409).json({
          message: '중복된 이메일이 존재합니다.',
        });

      // 비밀번호 확인
      if (password.length < 6)
        return res.status(400).json({
          message: '비밀번호는 적어도 6자리 이상 입력해 주세요.',
        });

      // 비밀번호 암호화
      const hashedPassword = await bcrypt.hash(password, 12);

      // 유저 생성
      const newUser = new User({ email, password: hashedPassword, nickname });

      // 토큰 생성
      const access_token = createAccessToken({ id: newUser._id });
      const refresh_token = createRefreshToken({ id: newUser._id });

      res.cookie('refreshToken', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 7 * 24 * 60 * 60 * 1000, // 30d
      });

      await newUser.save();

      return res.status(201).json({
        msssage: '회원가입이 완료됐습니다.',
        access_token,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  },
  login: async (req: IRequest, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      // 유저 유무 확인
      if (!user)
        return res.status(400).json({
          message: '등록되지 않은 이메일입니다.',
        });

      // 비밀번호 확인
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: '비밀번호가 일치하지 않습니다.',
        });

      // 토큰 생성
      const access_token = createAccessToken({ id: user._id });
      const refresh_token = createRefreshToken({ id: user._id });

      res.cookie('refreshToken', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 7 * 24 * 60 * 60 * 1000,
      });

      // 사용자 반환
      return res.status(200).json({
        message: '로그인에 성공했습니다.',
        access_token,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: err.message,
      });
    }
  },
  logout: async (req: IRequest, res: Response) => {
    try {
      res.clearCookie('refreshToken', {
        path: '/api/refresh_token',
      });

      return res.status(200).json({
        message: '로그아웃에 성공했습니다.',
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: err.message,
      });
    }
  },
  generateToken: async (req: IRequest, res: Response) => {
    try {
      const refresh_token = req.cookies.refreshToken;

      // 토큰 확인
      if (!refresh_token)
        return res.status(400).json({
          message: '다시 로그인 해주세요.',
        });

      // get user
      jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, result) => {
          if (err)
            return res.status(400).json({
              message: '다시 로그인 해주세요.',
            });

          const user = await User.findById(result.id);

          // 유저 확인
          if (!user)
            return res.status(400).json({
              message: '존재하지 않는 사용자입니다.',
            });
          const access_token = createAccessToken({ id: result.id });

          return res.status(200).json({
            access_token,
          });
        }
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: err.message,
      });
    }
  },
};

const createAccessToken = (payload: any) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d',
  });
};

const createRefreshToken = (payload: any) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '1d',
  });
};

export default authCtrl;
