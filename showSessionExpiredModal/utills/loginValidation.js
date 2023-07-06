
export const loginValidation=()=>{
    const islogin = JSON.parse(localStorage.getItem("isLogged"));
    return islogin;
}