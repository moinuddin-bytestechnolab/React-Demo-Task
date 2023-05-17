import axios from "axios"

// get user data
export const getUserData = async () => {
    try {
        const {data} = await axios.get("http://localhost:3000/user/");
        return data;
    } catch (error) {
        throw Error("Data is not fetched")
    }    
}


// post user data 
export const postUserData = async (newUserData : any) => {
    try {
        const response = await axios.post("http://localhost:3000/user/new/",newUserData)
        return response;
    } catch (error) {
        throw new Error("Data is not post");
    }
}

// delete user data 
export const deleteUserData = async (userID : any) => {
    try {
        const response = await axios.delete(`http://localhost:3000/user/${userID}`)
        return response;
    } catch (error) {
        throw new Error("Data is not deleted");       
    }
}

// get user by ID
export const getUserByID = async (userID : any) => {
    try {
        const {data} = await axios.get(`http://localhost:3000/user/${userID}`);
        return data;
    } catch (error) {
        throw new Error("User not found");
    }
}


// update user data
export const updateUserData = async (userID : any, updatedData : any) => {
    try {
        const response = await axios.put(`http://localhost:3000/user/edit/${userID}`,updatedData)
        return response;
    } catch (error) {
        throw new Error("User not updated");
    }
}