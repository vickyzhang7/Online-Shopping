# About The Project

## Introduction

**Summary**:

The Online Shopping Platform is a comprehensive MERN (MongoDB, Express, React, Node.js) application that seamlessly integrates frontend and backend components to deliver a robust and user-friendly online shopping experience. This project incorporates key features to enhance user engagement, security, and overall functionality.

**Major frameworks and libraries**:

* [![JavaScript][JavaScript-icon]][JavaScript-url]
* [![React][React-icon]][React-url]
* [![HTML][HTML-icon]][HTML-url]
* [![CSS][CSS-icon]][CSS-url]
* [![Git][Git-icon]][Git-url]
* [![Postman][Postman-icon]][Postman-url]
* [![NodeJS][NodeJS-icon]][NodeJS-ul]
* [![MongoDB][MongoDB-icon]][MongoDB-ul]
  

[React-url]:https://reactjs.org/
[React-icon]:https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[HTML-url]:https://html.com/
[HTML-icon]:https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[CSS-url]:https://www.css3.com/
[CSS-icon]:https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[JavaScript-url]:https://www.javascript.com/
[JavaScript-icon]:https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Git-icon]:	https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]:https://git-scm.com/
[NodeJS-icon]:https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-ul]:https://nodejs.org/en
[MongoDB-icon]:https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-ul]:https://www.mongodb.com/atlas/database
[Postman-url]:https://www.postman.com/
[Postman-icon]:https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white

<p align="right">(<a href="#readme-top">back to top</a>)</p>


**Frontend:**

1. **Using React.js for Component-Based Views:**
   - **Leveraging Component-Based Architecture:**
     - Enhances code organization and modularity by breaking the UI into reusable components.
   - **Creating Consistent UI Elements:**
     - Allows for the creation of consistent UI elements like headers, footers, and outlets for better user experience.

2. **User Authentication Management with React Context:**
   - **Efficient State Management:**
     - React Context API provides a centralized way to manage user authentication states across components.
   - **Custom Hook for Accessibility:**
     - A custom `useAuth` hook simplifies access to authentication states, improving code readability.

3. **Integration with Toastify for User Notifications:**
   - **Enhancing User Experience:**
     - Toast notifications offer real-time feedback on user actions, enhancing overall user experience.
   - **Easy Implementation:**
     - The `react-toastify` package simplifies the implementation of notifications with customizable styles.

4. **Fetching Data from Backend API:**
   - **Dynamic Content Rendering:**
     - Enables dynamic rendering of content by fetching and updating data from the backend API.
   - **Asynchronous Operations with Fetch:**
     - Utilizing asynchronous operations and the `fetch` function for efficient communication with the backend.

5. **State Management with Redux:**
   - **Centralized State Handling:**
     - Redux facilitates centralized state management, ensuring a single source of truth for the entire application.
   - **Predictable State Flow:**
     - Helps maintain a predictable state flow, especially in larger applications with complex state interactions.

6. **Dynamic Rendering of Product Listings:**
    - **React's Dynamic Rendering:**
      - Leverages React's ability to efficiently update the UI based on changes in the application state.
    - **Efficient Component Updates:**
      - Dynamically renders product listings, ensuring components only update when necessary for optimal performance.
     
<p align="right">(<a href="#readme-top">back to top</a>)</p>

**Backend:**

1. **Middleware for Request Handling:**
   - **Efficient Request Parsing:**
     - Middleware functions such as `express.json()` and `express.urlencoded()` streamline request parsing for easier handling.
   - **Cookie Parsing for Authentication:**
     - `cookie-parser` middleware parses cookies, facilitating secure authentication by managing user sessions.

2. **Cross-Origin Request Handling with CORS:**
   - **Secure Communication:**
     - CORS middleware ensures secure communication between frontend and backend, preventing unauthorized cross-origin requests.
   - **Fine-Grained Control:**
     - Allows fine-grained control over which domains are permitted to access the backend API.

3. **Environment Configuration with .env:**
   - **Securing Sensitive Information:**
     - `.env` files protect sensitive information such as database URIs and secret keys.
   - **Environment-Specific Configurations:**
     - Provides flexibility in configuring parameters like ports and external service credentials for different environments.

4. **Static File Serving and Client Routing:**
   - **Efficient Static File Delivery:**
     - Serves static files like uploaded images efficiently, improving application performance.
   - **Client-Side Routing Integration:**
     - Configures Express to support client-side routing, enabling seamless navigation within the React frontend.

5. **PayPal Integration for Payment Processing:**
   - **Secure Transaction Handling:**
     - Integrates PayPal for secure payment processing, ensuring a reliable and trustworthy checkout experience.
   - **API Configuration for Transactions:**
     - Configures API routes to handle PayPal transactions and communicates securely with the frontend for payment completion.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Interface Screenshots
### Without Sign-up for users or Sign-in for Manager

1. **Initial Interface (Product Showcase)**:
   
   - Presents a selection of product names and images, offering users a glimpse of available items.

     ![11](https://github.com/vickyzhang7/Online-Shopping/assets/130918669/9a1884e3-8cfa-4b69-a36a-624361e723b0)
2. **Product details**:
   
   - Allows users to browse items. Detailed information about each product is available, and users can also provide product reviews.

     ![22](https://github.com/vickyzhang7/Online-Shopping/assets/130918669/b4abf7b8-a7e0-4ab0-bbdf-05137f0252a6)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sign-up for users

1. **Sign-Up Functionality**:
   
   - Users can register by providing necessary information, and the user data is securely stored in MongoDB for future authentication.

     <img width="1284" alt="Screenshot 2023-11-11 at 12 13 09 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/7e5ede34-ecb6-4b64-9ded-6ba17c67f261">


2. **Shopping Cart**:
   
   - The shopping cart feature displays a summary of chosen products, including details and the total amount due.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 29 41 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/6a3f890b-812b-4a13-b383-2773965aa86e">


3. **Check Out**:
   
   - Users are prompted to provide their home address during the checkout process to ensure accurate shipping.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 29 49 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/f499b3b0-f268-4d1d-9eb8-b7f4a49e53c8">


4. **Payment Options**:
   
   - Offers users the ability to choose their preferred payment method from available options.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 29 56 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/7a2933c4-f536-4657-85b6-077d0ca80949">

     
5. **Order Summary**:
   
   - Presents a comprehensive overview, including the total amount, basic information about purchased products, shipping address, and selected payment method.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 30 07 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/f63906d0-4ea1-428e-9ef0-22d3b2cd5b29">

  
6. **PayPal Payment Interface**:
    
   - Users are redirected to the PayPal payment interface, where they can input detailed information such as bank card details and billing address.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 31 18 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/2a22d421-a118-41f9-a066-4a5ec8dc7379">


7. **Order Confirmation and ID**:
   
   - Users receive a unique order ID, and the status of the order.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 33 04 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/e45dfa22-cbe4-419b-99ab-7368e03ab72f">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sign-in for Manager

1. **Product Management**:
   
   - The system allows for the deletion, addition, and modification of product information.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 34 24 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/c2b4e601-49a6-4fbc-b053-a2036a75ab46">
     
     <img width="678" alt="Screenshot 2023-11-11 at 11 50 17 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/58a6939e-6dd9-4d62-81b2-0984b698dc94">


2. **User Management**:
   
   - Users can be deleted or modified, and their roles can be updated, including the option to designate a user as an administrator.
  
     <img width="1284" alt="Screenshot 2023-11-11 at 11 35 07 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/4b32c6b4-18ec-40cc-adbb-e8a149527998">
     
     <img width="1340" alt="Screenshot 2023-11-11 at 11 51 13 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/de79b57d-a834-4586-bf5c-0d34670a2eb4">


3. **Order Management**:
   
   - The order management functionality provides a detailed view of order information and allows for the marking of orders as delivered for shipping.

     <img width="1284" alt="Screenshot 2023-11-11 at 11 34 38 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/f33218ae-0ff1-42dc-a8ff-7e9ba0f3e0e4">
     
     <img width="1340" alt="Screenshot 2023-11-11 at 11 50 50 AM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/9f6602af-ab03-4102-849b-53152ab2bd24">

     


## Getting Started

Follow these steps to clone the repository, set up the backend, and configure the frontend for development or project execution.

Clone the repository:
   ```sh
   gh repo clone vickyzhang7/Online-Shopping
   ```

### Backend Setup

1. Create a `.env` file and add the following configuration:
   ```env
   PORT=5000
   MONGO_URI=<your_mongo_db_uri>
   JWT_SECRET=<your_secret>
   PAYPAL_CLIENT_ID=<your_paypal_client_id>
   PAYPAL_APP_SECRET=<your_paypal_secret>
   PAYPAL_API_URL=https://api-m.sandbox.paypal.com
   ```
   Replace `<your_mongo_db_uri>`, `<your_secret>`, `<your_paypal_client_id>`, and `<your_paypal_secret>` with your actual MongoDB URI, secret key, PayPal client ID, and PayPal secret.

2. Install MongoDB:
   ```sh
   npm install mongodb
   ```

3. Run data import script:
   ```sh
   npm run data:import
   ```

4. Install backend dependencies:
   ```sh
   npm install
   ```

5. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Install frontend dependencies:
   ```sh
   npm install
   ```

2. Build the frontend:
   ```sh
   npm run build
   ```

3. Start the frontend:
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>







