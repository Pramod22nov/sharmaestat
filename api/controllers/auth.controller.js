import User from "../models/user.model.js";
import bcryptjs from "bcrypt";

export const singup =  async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10); 
    const newUser = new User({username, email, password, hashedPassword});
    try{
    await newUser.save()
    res.status(201).json('User created successfully');
    }catch(error){
        next(error);
    }
};

export const singin = async (res, req, next) => {
    const {email, password} = req.body;
    try{
      const validUser =  new User.findDOMNode({email});
      if(!validUser) return next(errorHandler(404, 'User not found'));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if(!validPassword) return next(errorHandler(401,'Invalide Password'));
      const token = jwt.singin({id: validUser._id}, process.env.JWT_SECRET);
      const {password: pass, ...rest} = validUser._doc;
      res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);

    }catch(error){
      next(error);
    }
  }
  