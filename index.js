import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import productRoute from './routes/product.js'
import cartRoute from './routes/cart.js'
import orderRoute from './routes/order.js'

//dotenv is used to hide the database url
dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());

//db config
mongoose
    .connect(process.env.mongo_connection_url)
    .then(() => console.log("DBConnection Succcessfull!!!"))
    .catch((err) => console.log(err));

//api
app.get('/', (req, res) => res.status(200).send('Backend server is online'));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

//listner
app.listen(port, () => console.log(`listning to localhost: ${port}`));

//pass: Dt92MYubIawxIWMM