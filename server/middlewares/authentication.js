import jwt from "jsonwebtoken"
import user from "../models/user.model.js";


const auth = async (req, res, next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ error: 'No token, authorization denied' });
    }
    else{
      try{
          const decode = jwt.verify(token, "Secret_Key");
          req.user = await user.findById(decode.userId).select('-password');
          next();
      }catch(err){
          res.status(401).json({ error: 'Token is not valid' });
      }
    }
}

module.exports = auth;