const express = require('express')
const config = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors');

const globalErrorHandler = require('./src/middleware/globalErrorHandler')

const authRouter = require('./src/router/auth.routes')
const categroyRouter = require('./src/router/category.routes')
const productRouter = require('./src/router/product.routes')


config.config({
    path:'./config.env'
})

const app = express()
app.use('/uploads', express.static('uploads'));
app.use(cors({
    origin: "*", 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  }));

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{console.log("Conncted")})


app.use(authRouter);
app.use(categroyRouter);
app.use(productRouter)

app.use(globalErrorHandler);


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))