import enrollModel from "../model/Enroll.js";
import PracticalModel from "../model/Practical.js";

export const enrollStudent = async (req, res) => {  
  try {  
    const { practicalId, studentId } = req.body;  

   
    const enroll = new enrollModel({  
        practicalId,  
        studentId,  
    });  

   
    const savedenroll = await enroll.save();  
    console.log(savedenroll);
    
   
    const updatePractical = await PracticalModel.findByIdAndUpdate(  
      practicalId,  
      { $push: { enroll: savedenroll._id } },  
      { new: true } 
    )  
    .populate("enroll") 
    .exec();  

    res.json({  
       practicalId: updatePractical  
    });  
  } catch (error) {  
    return res.status(500).json({  
        error: "Error while enrolling student",  
    });  
  }  
};
