import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
    name: string;
    email:string;
    admin?: boolean;
    password:string;
}

class CreateUserService{

    async execute({name, email, admin, password} : IUserRequest){

        const usersRepositories = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error("email incorrect")
        }

        const userAlredyExists =await usersRepositories.findOne({
            email
        });

        if(userAlredyExists){
            throw new Error("user alredy exists");
        }

        const passwordHash =  await hash(password, 8);

        const user = usersRepositories.create({
            name,
            email,
            admin,
            password
        })

        await usersRepositories.save(user);
        
        return user;
    }
}

export { CreateUserService }