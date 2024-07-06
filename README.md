# Application Overview

This application has three main pages:

1. **Home Page**: Includes the form for entering the flash number.
2. **Confirmation Page**: The page where the user confirms the payment if they are registered.
3. **Redirection Page**: The page the user is redirected to if they are not registered.

## Registered Users

Here is the list of registered users:

- **Ahmed Moatez**: Phone: 01587741912
- **Erick Gordon**: Phone: 01298486988
- **Sherien Mohamed**: Phone: 01590703150
- **Abdullah Rabeaa**: Phone: 01095971344
- **Amal Nassar**: Phone: 01199361079
- **Mazen Ahmed**: Phone: 01118317909
- **Ehab Tawfeeq**: Phone: 01516783485
- **Mary Erik**: Phone: 01138265387
- **Waleed Medhat**: Phone: 01111791085
- **AbdelAziz Matar**: Phone: 01205207929

## JSON Server Endpoints

We are using a JSON server with two endpoints:

1. **Check Registered Users**: `http://localhost:9000/registered_users`
2. **Get Order Data**: `http://localhost:9000/orders`

### Endpoints Description

- **`http://localhost:9000/registered_users`**:
  - Checks if the user is registered or not.
  
- **`http://localhost:9000/orders`**:
  - Retrieves the order data.

## Installation and Running the Server

1. **Clone the Repository**:
   ```bash
   git clone -b master git@github.com:AhmedRabea0302/flash.git
   cd flash
   npm install
   npm run dev

2. **Run Json Server**:
  ```bash
    npm run server 
