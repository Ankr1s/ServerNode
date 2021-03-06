import { Router } from "express";
const DataRouter = Router();
const puppeteer = require('puppeteer');
const GameModel = require('../models/GameModel').GameModel;
const NotificationModel = require('../models/NotificationModel').NotificationModel;


DataRouter.post("/addGame", async (req, res) => {
  
    const { email, name, startDate , finishDate, duration , description} = req.body;
    const payload = {
        email: email,
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



DataRouter.post("/getGames", async (req, res) => {

  const { email } = req.body;

  try {
    const games = await GameModel.find({ email: email });
    if (games == null){
      res.status(400).send();
    }else{
      res.send(games);
    }
    
  } catch (error) {
    res.status(500).send(error);
  }



})

DataRouter.post("/addNotification", async (req, res) => {
  
    const { name, price } = req.body;
    const payload = {
        name : name,
        price : price
    }
    const notification = new NotificationModel (payload);
  try {
    const notifications = await NotificationModel .findOne({ name : name});
    if (notifications != null){
      res.status(400).send();
    }else{
      await notification.save();
      res.send({game: notification});
    }
    
  
  } catch (error) {
    res.status(500).send(error);
  }



})

DataRouter.get("/getNotifications", async (req, res) => {

    try {
      const notifications = await NotificationModel.find({ });
      if (notifications == null){
        res.status(400).send();
      }else{
  
        res.send({notifications});
      }
      
    } catch (error) {
      res.status(500).send(error);
    }
  
  
  
  })


export = DataRouter;
