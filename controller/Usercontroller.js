import userModel from "../model/User.js"


export const createAdmin=async (req, res) => {
    try {

    
      const { name, email, password } = req.body;


      const user = new userModel({
        name,
        email,
        password,
        role: "Admin",
      });

      const savedUser=await user.save();

      res.json({
          user:savedUser,
          message:"Admin created successfully"
      })
  
    } catch (error) {
    
      res.json({
          message:"Server error"
      })
  
      console.log(error)
    }
  };
  
  export const createTeacher=async (req, res) => {
    try {

    
      const { name, email, password } = req.body;


      const user = new userModel({
        name,
        email,
        password,
        role: "Teacher",
      });

      const savedUser=await user.save();

      res.json({
          user:savedUser,
          message:"Teacher created successfully"
      })
  
    } catch (error) {
    
      res.json({
          message:"Server error"
      })
  
      console.log(error)
    }
  };

  export const createStudent=async (req, res) => {
    try {

    
      const { name, email, password } = req.body;


      const user = new userModel({
        name,
        email,
        password,
        role: "Student",
      });

      const savedUser=await user.save();

      res.json({
          user:savedUser,
          message:"Teacher created successfully"
      })
  
    } catch (error) {
    
      res.json({
          message:"Server error"
      })
  
      console.log(error)
    }
  };


  export const getAllUsers=async(req,res)=>{
    try 
    {
      
      const getusers=await userModel.find()
      
        res.json({
          getusers
        })
      
    } catch (error) {
      res.json({
        error:`Cannot fetch data${error}`
      })
      console.log(error)
    }
  }
  
  export const getAllAdmin=async(req,res)=>{
    try {
      const getusers=await userModel.findOne({role:"Admin"})
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:`Cannot fetch data${error}`
      })
      console.log(error)
    }
  }


  export const getAllTeacher=async(req,res)=>{
    try {
      const getusers=await userModel.find({role:"Teacher"})
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:`Cannot fetch data${error}`
      })
      console.log(error)
    }
  }

  export const getAllStudent=async(req,res)=>{
    try {
      const getusers=await userModel.find({role:"Student"})
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:`Cannot fetch data${error}`
      })
      console.log(error)
    }
  }