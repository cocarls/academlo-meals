import { catchAsync } from "../../common/errors/catchAsync.js";
import { generateJWT } from "../../config/plugins/generate-jwt.plugin.js";
import { UserService } from "./user.service.js";

export const createUser = catchAsync(async(req,res,next)=>{
const {name, email, password, role} = req.body

const user = await UserService.create({name, email, password, role})

const token = await generateJWT(user.id)

return res.status(201).json({
    token,
    user:{
        name: user.name,
        email:user.email
    }
})
})
export const login = catchAsync(async(req,res,next)=>{
    
})
export const updateprofile = catchAsync(async(req,res,next)=>{
    
})
export const deleteUser = catchAsync(async(req,res,next)=>{
    
})
export const findUserOrders = catchAsync(async(req,res,next)=>{
    
})
export const findOneOrder = catchAsync(async(req,res,next)=>{
    
})