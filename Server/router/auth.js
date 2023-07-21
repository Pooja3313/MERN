const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const authenticate = require("../Middleware/authenticate");
const cookieParser = require('cookie-parser');
router.use(cookieParser());


// router.get('/',(req, res) => {
//     res.send("Hello world from server router.js");
// });
// using promises
//  router.post('/register',(req, res) => {
//     //console.log(req.body); //print karva sakte hai but res.json na likhe toh kuch response nahi dega means koi output display nahi hoga
//     // res.json({message:req.body}); //res.json provide responce agar hume yeh na likhe toh only requesting hi rahega koi output display nahi hoga this line provide response in json...this line not write then api call error means testing data not get response;
//         const {name, email, phone, work, password, cpassword}  = req.body;
//         if(!name || !email || !phone || !work || !password || !cpassword) {
//              return res.status(422).json({error: "plz filled the field properly"});
//            }
//             User.findOne({email:email})
//               .then((userExist) => {
//                if(userExist) {
//                     return res.status(422).json({error :"Email Already Exist "});
//                       }

//              const user = new User({name, email, phone, work, password, cpassword});
//              user.save().then(() => {
//                      res.status(201).json({ message: "user registered Successfuly"});
//                       }).catch((err) => res.status(500).json({error:"Failed to registered"}));
//               }).catch(err => {console.log(err); });
// });


//async -await using
router.post('/register', async (req, res) => {

  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled the field properly" });
  }
  try {
    const userExist = await User.findOne({ email: email })

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist " });

    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    }
    else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();
      return res.status(201).json({ message: "user registered Successfuly" });

    }


  } catch (err) {
    console.log(err);
  }
});

// Login Schema

// router.post('/signin', async (req, res) => {

//     try {
//         let token;
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json({ error: "plz filled the field properly" });
//         }
//         const userLogin = await User.findOne({ email: email });//if email id same hogi joh user ne register keh voh toh user successfully login
//         // console.log(userLogin);

//         if (userLogin) {
//             const isMatch = await bcrypt.compare(password, userLogin.password);
//             console.log(userLogin);

//             token = await userLogin.generateAuthToken();
//             console.log(token);
//             res.cookie("jwtoken", token, {
//                 expires: new Date(Date.now() + 25892000000),
//                 httpOnly: true
//             });
//             if (!isMatch) {
//                 return res.status(400).json({ error: "Invalid credentials pass" });
//             }
//             else {
//                 return res.status(200).json({ error: "user SignIn Successfully " });
//                 // console.log(token);
//             }

//         }
//         else {
//             return res.status(200).json({ error: "Invalid credentials " });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

router.post('/signin', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all the fields" });
    }

    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    token = await userLogin.generateAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true
    });

    return res.status(200).json({ success: "User signed in successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/about', authenticate, (req, res) => {
  console.log(`Hello my About`);
  res.send(req.rootUser);
});
// router.get('/about', authenticate, (req, res) => {
//     console.log(`Hello my About`);

//     // Access the JWT token from the cookies
//     const token = req.cookies.jwtoken;
//     console.log(token);

//     // Use the token for further processing or verification

//     res.send(req.rootUser);
//   });


module.exports = router; //another file use this router that's why it's exports