import { hash } from "bcryptjs"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
    name: string;
    email:string;
    admin?: boolean;
    password:string;
}

class createUserService{

    async execute({name, email, admin, password} : IUserRequest){

        const usersRepositories = new UsersRepositories();

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

export { createUserService }