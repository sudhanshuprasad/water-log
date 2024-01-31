import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

    signup(){
        return {msg:"signup done"}
    }

    login(){
        return {msg:"welcome back, logged in"}
    }

}