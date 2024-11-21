import PracticalModel from "../model/Practical.js"


export const createPractical = async (req, res) => 
{
  const { subjectId, title, description, createdBy } = req.body;

  try {
    const practicalobj = new PracticalModel({
      subjectId,
      title,
      description,
      createdBy,
    });
    const savedpracticalObj = await practicalobj.save();
      console.log(savedpracticalObj);
      res.json({
        savedpracticalObj,
        message: "Subject created successfully"
      });
  
    } catch (error) {
        console.log(error);
        
      res.json({
        error: "Error occured",
      });
  
    }
  };


  export const getAllPractical=async(req,res)=>{
    try {
      const getpractical=await PracticalModel.find()
      res.json({
        getpractical
      })
    } catch (error) {
      res.json({
        error:`Cannot fetch data${error}`
      })
      console.log(error)
    }
  }