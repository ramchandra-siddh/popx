PopX React App

A simple and elegant single-page application built with React and React Router v6. The app simulates a user onboarding experience with welcome, login, registration, and account settings pages — all wrapped in a card-style layout and styled with Tailwind CSS.

✨ Features

🌐 Client-side Routing with react-router-dom

🎨 Modern UI using Tailwind CSS

🗭 Navigation Footer for step-based movement

✅ Forms with Required Fields for Register/Login

👤 Account Summary Page with avatar and email display

🧱 Components Overview

Layout.js

Wraps all pages inside a 380×600px card. Includes a footer navigation bar with:

Home (/welcome)

Back/Next arrows to move between routes

Page index (e.g., 2 of 4)

Welcome.js

Landing page with:

A welcome message

Buttons to navigate to Register and Login

Register.js

User registration form with:

Full Name, Phone, Email, Password, Company Name

Radio button: Are you an agency?

On submit: navigates to /account

Login.js

Simple login form with:

Email and Password fields

Non-functional login button (placeholder UI)

Account.js

Displays:

Avatar and user details (static)

Description placeholder text

💻 Getting Started

Prerequisites

Node.js v14 or newer

npm

📦 Dependencies

react

react-dom

react-router-dom

tailwindcss (assumed, based on class usage)
