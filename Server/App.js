const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const express = require('express');
const App = express();
const cors = require("cors");

// const authRouter = require('./router/auth');

App.use(cors(
    {
        origin: ["https://mern-pooja.vercel.app"],
        methods:["POST", "GET"],
        credentials: true
    }
));
App.use(express.json());
App.get('/',(req, res) => {
        res.send("Hello world from server App.js");
    });

dotenv.config({ path: './config.env'});
const PORT = process.env.PORT;
require('./db/conn');
                              //{this line use for output get data in this brackets like name:pooja etc...}
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