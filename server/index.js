import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDb from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 3000;
const app = express();

//connecting to mongodb
await connectDb();

app.use(express.json());

// Enable All CORS Requests
app.use(cors( { origin: '*' } ));

app.get('/', (req, res) => {
  res.send('API WORKING');
});
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});