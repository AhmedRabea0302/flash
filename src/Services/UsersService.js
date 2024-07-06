const BASE_URL = 'http://localhost:8080';
const CLIENT_ID = '50321';
const CLIENT_SECRET = 'crf84rfe/5f1sd';
// Check user existence 
const checkIfUserIsRegistered = async (user_phone_number) => {
    try {
        const registeredUser = await fetch(`/api/registered_users?phone_number=${user_phone_number}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            return data;
        });

        console.log("REGISTERED: ", registeredUser);
        return registeredUser;
    } catch (error) {
        return error;
    }
};

// Authenticate user 
const authenticateUser = async () => {
    try {
        const base64Credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
        const data = await fetch(`${BASE_URL}/v1/auth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${base64Credentials}`
            },
        })
        .then((response) => response.json())
        .then((data) => {
            return data;
        });

        return data;
    } catch (error) {
        return error;
    }
};

// Get User Info service
const getUserService = () => {
    return JSON.parse(localStorage.getItem("user"));
};

  
export {
    checkIfUserIsRegistered,
    authenticateUser,
    getUserService
}