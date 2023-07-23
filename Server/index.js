const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const express = require('express');
const App = express();
const cors = require("cors");
const authRouter = require('./router/auth');

dotenv.config({ path: './config.env'});
const PORT = process.env.PORT;
require('./db/conn');

App.get('/',(req, res) => {
            res.send("Hello Pooja")
            }
);
    
    
App.use(express.json()); //{this line use for output get data in this brackets like name:pooja etc...}
App.use(cors(
    {
        origin: "*",
        
    }
)); 

App.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://mern-frontend-alpha.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials such as cookies
    next();
  });

if(process.env.NODE_ENV === "production")
{
    App.use(express.static("../client/build"));
    App.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname,"client","index.html"));
    });

}
const User = require('./model/userSchema');

App.use(require('./router/auth'));
//middleware
// const middleware = (req,res,next) =>{
// console.log("Hello my Middleware");
// next();
// }

// App.get('/',(req, res) => {
//     res.send("Hello world from server App.js");
// });
// App.get('/About', middleware, (req, res) => {
//     console.log("Hello my About");
//     res.send("About world from server");
        
//     });
// App.get('/Contact',(req, res) => {
//     res.cookie("jwttoken",'token');
//             res.send("Contact world from server");
// });
// App.use('/auth', authRouter);
App.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})