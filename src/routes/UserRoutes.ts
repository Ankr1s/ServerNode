import { Router } from "express";
import { generateJWT } from "../security/jwt";
const UserModel = require('../models/UserModel').UserModel;
const userRouter = Router();

userRouter.post("/Register", async (req, res) => {
    // const { authorization } = req.headers;
    const { email, password } = req.body;
    const payload = {
        email,
        password
    }
    
    const user = new UserModel(payload);

  try {
    await user.save();
    res.send({user});
  } catch (error) {
    res.status(500).send(error);
  }

})

userRouter.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  const jwt = generateJWT({email});

  try{
   
    const users = await UserModel.findOne({ email: email });
    console.log(users)
    res.send(users +"  " + jwt);
   
  } catch(error){
    res.status(500).send(error);
  }
  
  
})

export = userRouter;