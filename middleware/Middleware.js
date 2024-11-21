import userModel from "../model/User.js";
import express from "express";
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

export const isAdmin = async (req, res, next) => {
    try {
      const { role } = req.body;
      const userInfo = await userModel.find({ role })
      console.log(userInfo[0].role);
      
      if(userInfo && userInfo[0].role=="Admin")
      {
          next();
      }
      else{
          res.status(403).json({
              message:"Access Denied, only Admin can access"
          })
      }
    } catch (error) {
      res.status(500).json({
          message:"Internal server error"
      })
    }
  };




  export const isTeacher = async (req, res, next) => {
    try {
      const { createdBy } = req.body;
  
      const userInfo = await userModel.find({ _id:createdBy })
      console.log(userInfo[0].role);
      
      if(userInfo && userInfo[0].role=="Teacher")
      {
          next();
      }
      else{
          res.status(403).json({
              message:"Access Denied, only Admin can access"
          })
      }
    } catch (error) {
      res.status(500).json({
          message:"Internal server error"
      })
    }
  };


  export const isSuadmineacher = async (req, res, next) => {
    try {
      const { createdBy } = req.body;
      console.log(createdBy);
      const userInfo = await userModel.find({ _id: createdBy })
      
      if(userInfo && userInfo[0].role=="Admin")
      {
          next();
      }
      else{
          res.status(403).json({
              message:"Access Denied, only Admin can access"
          })
      }
    } catch (error) {
      res.status(500).json({
          message:"Internal server error"
      })
    }
  };



  export const isAdminOrTeacher = async (req, res, next) => {
    try {
      console.log(req.body);  
      const { role } = req.body;
      console.log(role)
      const userInfo = await userModel.find({ role })
      console.log(userInfo[0].role);
      
      if(userInfo && userInfo[0].role=="Teacher"||userInfo[0].role=="Admin")
      {
          next();
      }
      else{
          res.status(403).json({
              message:"Access Denied, only Teacher Or Admin  can access"
          })
      }
    } catch (error) {
      res.status(500).json({
          message:"Internal server error"
      })
    }
  };