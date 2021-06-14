import { Router } from "express";
const DataRouter = Router();
const puppeteer = require('puppeteer');
const GameModel = require('../models/GameModel').GameModel;


DataRouter.post("/addGame", async (req, res) => {
  
    const { name, startDate , finishDate, duration , description} = req.body;
    const payload = {
        name : name,
        startDate : startDate,
        finishDate : finishDate,
        duration : duration,
        description : description
    }
    const game = new GameModel(payload);
  try {
    const games = await GameModel.findOne({ name : name});
    if (games != null){
      res.status(400).send();
    }else{
      await game.save();
      res.send({game});
    }
    
  
  } catch (error) {
    res.status(500).send(error);
  }



})


export = DataRouter;
