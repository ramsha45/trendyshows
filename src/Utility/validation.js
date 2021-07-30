import { isEmpty } from "./common";

export const valid = (user) => {
   for (let i = 0; i < Object.values(user).length; i++) {
        if(isEmpty(Object.values(user)[i])) {
                return false; 
        }  
    } 
    return true;
}

export const confirmPasswordMatched = (pass,confirmPass) => {
    return (pass === confirmPass ? true :  false)
}