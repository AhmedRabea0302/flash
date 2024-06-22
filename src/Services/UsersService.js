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

export {
    checkIfUserIsRegistered
}