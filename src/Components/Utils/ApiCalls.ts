import Instance from "./AxiosConfig";

interface iUser {
    FullName: string;
    Email: string;
    Password: string;
}

interface loginUser {
    Email: string;
    Password: string;
}

export const createUser = async (data: iUser) => {
    try
    {
        const response = await Instance.post("/reg-user", data);
        console.log(response)
        return response
    }catch(error)
    {
        console.log(error)
    }
}

export const loginUser = async (data: loginUser) => {
    try
    {
        const response = await Instance.post("/login-User", data)
        console.log(response)
        return response
    }catch(error)
    {
        console.log(error)
    }
}