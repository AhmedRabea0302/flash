import { getUserService } from "./UsersService";

const BASE_URL = 'http://localhost:8080';
const paymentRequestBody = {
    "integrationId": 58328228,
    "aggregatorOrderId": "94fd204c-4f44-477a-8339-471cf6ed41f2"
};

// Create Order Service
const createOrder = async () => {
  try {
    const token = getUserService();
    const loginData = await fetch(`${BASE_URL}/v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(paymentRequestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
      });
    return loginData;
  } catch (error) {
    return error;
  }
};

export default createOrder;