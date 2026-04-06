import type { SignUpDataDTO } from "../dtos/user.dto.js"; 

import bcrypt from 'bcryptjs'
import { signUpRepo } from "../repositories/user.repository.js";


export async function signUpService(signUpData:SignUpDataDTO) {
    try {
        const {email,password,name,role}=signUpData
        const hashedPassword = await bcrypt.hash(password,10);
        const newsignupData = {email,password:hashedPassword,name,role};
        const user = await signUpRepo(newsignupData);
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}