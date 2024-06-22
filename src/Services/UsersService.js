// Get All Cities Service
const checkIfUserIsRegistered = async (user_phone_number) => {
    try {
      const registeredUser = await fetch(`/api/cities?_registered_users=${user_phone_number}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      return registeredUser;
    } catch (error) {
      return error;
    }
};

export {
    checkIfUserIsRegistered
}