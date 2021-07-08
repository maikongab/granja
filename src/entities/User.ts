import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Users")
class User {
    @PrimaryColumn()
   readonly id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    admin: boolean;
    @Column()
    password: string;
    @CreateDateColumn()
    created_at: Date;
    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        
    }
}

export { User };