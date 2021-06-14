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
    const users = await UserModel.findOne({ email: email});
    if (users != null){
      res.status(400).send();
    }else{
      await user.save();
      res.send({user});
    }
    
  
  } catch (error) {
    res.status(500).send(error);
  }

})

userRouter.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  const jwt = generateJWT({email});

  try{
   
    const users = await UserModel.findOne({ email: email, password: password });
    console.log(users)
    if(users == null){
      res.status(400).send();
    }else{
      res.status(200).send();
    }
  
  } catch(error){
    res.status(500).send(error);
  }
  
  
})

export = userRouter;