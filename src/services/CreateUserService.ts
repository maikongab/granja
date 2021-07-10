import { hash } from "bcryptjs"

interface IUserRequest{
    name: string;
    email:string;
    admin?: boolean;
    password:string;
}

class createUserService{

    async execute({name, email, admin, password} : IUserRequest){


        const passwordHash =  await hash(password, 8);
    }
}

export { createUserService }