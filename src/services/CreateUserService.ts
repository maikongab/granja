

interface IUserRequest{
    name: string;
    email:string;
    admin?: boolean;
    password:string;
}

class createUserService{

    async execute({name, email, admin, password} : IUserRequest){

    }
}

export { createUserService }