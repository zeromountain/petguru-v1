import config from 'config';
import { connect, ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI: string = config.get('mongoURI');
    await connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
