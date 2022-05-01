import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user.model';
import { IRequest } from '../interfaces/request.interfaces';
import { json } from 'stream/consumers';

const authenticate = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization');

    // 토큰 확인
    !token && res.status(400).json({ message: '인증에 실패했습니다. - (1)' });

    // 토큰 해독
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // 토큰 해독 확인
    !decodedToken &&
      res.status(400).json({ message: '인증에 실패했습니다. - (2)' });

    // 사용자 할당
    const user = await User.findById({ _id: (decodedToken as any).id });

    req.user = user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message: err.message,
    });
  }
};
