*RBAC (Role-Based Access Control) Web Application
This project implements a Role-Based Access Control (RBAC) system with a user interface built using React.js. The application allows admins to manage users, roles, and permissions. Users can be assigned specific roles, and each role can have various permissions such as Create, Read, Update, and Delete (CRUD) operations. The project includes CRUD operations for users, roles, and permissions, and is styled using Bootstrap for a clean and responsive design.

*Project Overview
The RBAC Web Application allows the creation and management of users, roles, and permissions. With this app, administrators can:
Add, edit, and delete users.
Create, modify, and delete roles.
Assign specific permissions to roles.
Assign roles to users.
The application is styled with Bootstrap and provides a responsive UI that works seamlessly across mobile, tablet, and desktop devices.

*Features

User Management:
Add, edit, and delete users.
Assign roles to users.
List users with their names and roles.

Role Management:
Create, edit, and delete roles.
Assign permissions (Create, Read, Update, Delete) to roles.

Permission Management:
Define different permissions such as "Create", "Read", "Update", and "Delete".
Assign permissions to roles.
Responsive Design:

*The application is fully responsive and works well on mobile, tablet, and desktop devices.

Interactive Modals:
Add and edit users/roles via modal pop-ups for a smooth user experience.

*Tech Stack

Frontend:
React
React Router
React Icons
Bootstrap (for styling)

Backend:
Not implemented (local storage is used to store users, roles, and permissions for now).

*Setup Instructions
Follow these steps to set up and run the application locally:

Prerequisites
Node.js (v12 or higher)
npm (v6 or higher)
Step 1: Clone the Repository

Copy code
git clone https://github.com/shani-p-a/rbac-ui.git
cd rbac-ui
Step 2: Install Dependencies
Install all the required dependencies using npm:

npm install

Step 3: Run the Application

Start the development server:
npm start
The application will now be running at http://localhost:3000.

File Structure
bash
Copy code
/rbac-ui
  ├── /src
  │    ├── /components
  │    │    ├── UserManagement.jsx
  │    │    ├── RoleManagement.jsx
  │    │    ├── PermissionManagement.jsx
  │    │    ├── Navbar.jsx
  │    │    └── ModalForm.jsx
  │    ├── /data
  │    │    ├── users.js
  │    │    ├── roles.js
  │    │    └── permissions.js
  │    ├── App.css
  │    ├── App.jsx
  │    └── index.js
  └── README.md

Usage
Upon loading the app, you will see an overview page with links to manage users, roles, and permissions.
User Management: Create and manage users, assign roles, and update information.
Role Management: Add and manage roles, and assign appropriate permissions to each role.
Permission Management: Define different permissions (e.g., Create, Read, Update, Delete) and assign them to roles.
The data is currently stored in memory, meaning it will be lost when the page is refreshed. 

