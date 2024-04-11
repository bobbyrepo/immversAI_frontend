# Ticket Booking System

## Introduction

The Ticket Booking System is a web application designed to facilitate booking tickets for various events or services. It includes features for filtering tickets by price, showing ticket details, and allowing users to book tickets by providing their name and email.

## Features
- The application displays a list of filtered tickets by price.
- Users can view ticket information such as event name, ticket type, price, and availability status.

### Show Ticket Details
- Clicking on a details button navigates users to a details page where they can view more information about the ticket.
- Details include ticket type, price, passenger name and availability status.

### Book a Ticket
- Users can book a ticket by providing their name and email address.
- Upon successful booking, a confirmation message is displayed to the user.

## Technologies Used
- React.js: Frontend framework for building user interfaces.
- React Router: For navigation between pages.
- Axios: Used for making API calls to the backend.
- Tailwind CSS: Provides utility classes for styling components.

Before you can run this project, you need to set up some environment variables. Create an `.env` file in the project root and add the following variables:

- `REACT_APP_BASE_URL`: server link

## Usage

To use the Warehouse Management App:

1. Run `git clone https://github.com/bobbyrepo/immversAI_frontend` to clone the repository to your local machine.
2. Run `npm install` to install the project dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and visit `http://localhost:3000`.
