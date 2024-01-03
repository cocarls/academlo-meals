import User from "./user.model.js";

export class UserService {
    static async create(data){
        return await User.create(data)
    }

    static async findOneByEmail(email){
        return await User.findOne({
            where:{
                email:email,
                status: true
            }
        })
    }
}