# About The Project

## Introduction

**Summary**:

Online Shopping Website is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to enable users to share travel photos and experiences. This project encompasses both frontend and backend development, along with integration with the Google Maps Platform API, providing rich functionality and interactivity.

**Major frameworks and libraries**:

* [![JavaScript][JavaScript-icon]][JavaScript-url]
* [![React][React-icon]][React-url]
* [![HTML][HTML-icon]][HTML-url]
* [![CSS][CSS-icon]][CSS-url]
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
[NodeJS-icon]:https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-ul]:https://nodejs.org/en
[MongoDB-icon]:https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-ul]:https://www.mongodb.com/atlas/database
[Postman-url]:https://www.postman.com/
[Postman-icon]:https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**Frontend:**

1. **Using React.js to Build Frontend Views:**
   - Utilizing React.js to construct user-friendly frontend views.
   - React.js offers a component-based approach for building user interfaces.

2. **Utilizing BrowserRouter and Route Components to Create Multiple Pages and Routes:**
   - Employing the `BrowserRouter` and `Route` components from the `react-router-dom` package to establish different pages and routes.
   - Allowing users to navigate to various sections of the application.

3. **Using React's Context and Custom useAuth Hook to Manage User Authentication and Tokens:**
   - Leveraging React's Context API to share user authentication information.
   - Employing a custom `useAuth` hook to access and manage user authentication states.

4. **Implementing User Registration, Login, and Logout Functionality for Secure Authentication:**
   - Creating registration and login forms to collect user data.
   - Utilizing the `fetch` function or other HTTP request libraries to send user data to the backend for authentication.
   - Managing user login status using tokens and enabling logout functionality.

5. **Providing User the Ability to Create, Edit, and Delete Travel Records:**
   - Developing forms and user interfaces to allow users to create, edit, and delete travel records.
   - Using HTTP requests to send travel record information to the backend for processing.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**Backend:**

1. **Using Node.js and Express to Build Backend, Providing RESTful API for Interaction with MongoDB Database:**
   - Building an API server using Node.js and Express to facilitate data interaction between the frontend and MongoDB database.
   
2. **Integrating the mongoose Package for Data Modeling and Database Operations:**
   - Incorporating the `mongoose` package to define data models and perform database operations.
   
3. **Implementing File Upload and Storage for User-Submitted Travel Photos:**
   - Utilizing file upload middleware (such as `multer`) to handle and store user-uploaded travel photos on the server.

4. **Handling Cross-Origin Requests to Ensure Secure Communication Between Frontend and Backend:**
   - Adding cross-origin request handling middleware (such as `cors`) to ensure secure communication between the frontend and backend.

5. **Implementing User Management, Including Authentication and Authorization:**
   - Creating routes for user registration and login.
   - Employing the `bcrypt` library to securely process passwords.
   - Using JSON Web Tokens (JWT) for user authentication and authorization.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Interface Screenshots

1. **Initial Interface (Product Showcase)**:
   
   - Presents a selection of product names and images, offering users a glimpse of available items.

     ![11](https://github.com/vickyzhang7/Online-Shopping/assets/130918669/a8f81eab-353b-4578-8171-2ddd479bd4f0)


2. **Sign-Up Functionality**:
   
   - Users can register by providing necessary information, and the user data is securely stored in MongoDB for future authentication.

     <img width="1350" alt="Screenshot 2023-11-10 at 10 07 39 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/1f7fcfeb-4ed4-47f4-8913-6fd84bc56d05">


3. **Product Selection**:
   
   - Allows users to browse and select their preferred items. Detailed information about each product is available, and users can also provide product reviews.

     <img width="1350" alt="Screenshot 2023-11-10 at 10 08 35 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/71c38b6e-22c2-4e28-ae0b-2599b0271065">


4. **Shopping Cart**:
   
   - The shopping cart feature displays a summary of chosen products, including details and the total amount due.

     <img width="1350" alt="Screenshot 2023-11-10 at 10 09 13 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/10f4c185-f709-45f7-99de-c87b89a3d439">



5. **Check Out**:
   
   - Users are prompted to provide their home address during the checkout process to ensure accurate shipping.

     <img width="1350" alt="Screenshot 2023-11-10 at 10 09 27 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/ef0dce95-aa7d-488d-838c-7f1d4882f772">


6. **Payment Options**:
   
   - Offers users the ability to choose their preferred payment method from available options.

     <img width="1350" alt="Screenshot 2023-11-10 at 10 09 36 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/b57cda71-adcf-4fe2-84ce-4c71708912da">
     

7. **Order Summary**:
   
   - Presents a comprehensive overview, including the total amount, basic information about purchased products, shipping address, and selected payment method.

     <img width="1354" alt="Screenshot 2023-11-10 at 10 10 05 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/ee2b6525-03d6-4dd6-bf07-5f93f6ccdf27">
     

8. **Order Confirmation and ID**:
   
   - Users receive a unique order ID, and they are prompted to specify the chosen payment method for the order.

     <img width="1354" alt="Screenshot 2023-11-10 at 10 11 00 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/a641f40c-383c-4965-93a3-2751082a8397">
     

9. **PayPal Payment Interface**:
    
   - Users are redirected to the PayPal payment interface, where they can input detailed information such as bank card details and billing address.

     <img width="809" alt="Screenshot 2023-11-10 at 10 12 09 PM" src="https://github.com/vickyzhang7/Online-Shopping/assets/130918669/ebc36cae-b66b-4882-ae4a-0ce79d06b493">



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

These steps will help you clone the repository, set up the back end, and configure the front end, allowing you to start development or run the project. To set up and run this project, follow these steps:

1. Clone the repository. This command clones the project repository to your local machine.
   ```sh
   gh repo clone vickyzhang7/Trip-share-website
   ```
   
### Backend Setup

2. Open the `app.js` and `location.js` files and input your API key. Replace 'YOUR KEY' with your actual API key.
   ```js
   const API_KEY = 'YOUR KEY';
   ```

3. Install Mongoose version 6.  This command installs the required Mongoose version.
   ```sh
   npm install mongoose@6
   ```

4. Start the backend server. This command starts the backend server for the application.
   ```sh
   npm start
   ```

### Frontend Setup

5. Install NVM (Node Version Manager). This command installs NVM, a tool for managing Node.js versions.
   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```
6. Activate NVM. This command activates NVM for use.
   ```sh
   source ~/.nvm/nvm.sh
   ```

7. Install Node.js version 14. This command installs Node.js version 14, which is required for the project.
   ```sh
   nvm install 14
   ```

8. Check Node.js version. Verify that Node.js 14 is successfully installed.
   ```sh
   node -v
   ```

9. Install frontend project dependencies. This command installs the necessary frontend project dependencies.
   ```sh
   npm install
   ```

10. Start the frontend. This command starts at the frontend of the web application.
    ```sh
    npm start
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>







