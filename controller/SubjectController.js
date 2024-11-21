import SubjectModel from "../model/Subject.js";

export const createSubject=async (req, res) => {
    try {
      const {name,code,createdBy} = req.body;
      
      const subjectObj = new SubjectModel({
        name,
        code,
        createdBy
      });

      console.log("object : ",subjectObj);
  
      const savedsubjectObj = await subjectObj.save();
      console.log(savedsubjectObj);
      res.json({
        savedsubjectObj,
        message: "Subject created successfully"
      });
  
    } catch (error) {
        console.log(error);
        
      res.json({
        error: "Error occured",
      });
  
    }
  };

// get All SUbject 
  export const getAllSubject=async(req,res)=>{
    try {
      const getsubject=await SubjectModel.find()
      res.json({
        getsubject
      })
    } catch (error) {
      res.json({
        error:`Cannot fetch data${error}`
      })
      console.log(error)
    }
  }