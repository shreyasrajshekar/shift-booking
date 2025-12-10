# Shift-booking
The Shift Booking App is a React Native application using Expo that allows users to view, book, and cancel work shifts efficiently. Shifts are organized by date and city, giving users a clear overview of available work periods. Each shift includes a start time, end time, location, and booking status.

Key Features:

View All Shifts – Browse shifts grouped by date.

Book or Cancel Shifts – Reserve available shifts or cancel existing bookings.

Visual Availability – Booked shifts are highlighted, unavailable shifts are shown in grey.

Conflict Prevention – Prevents overlapping bookings for a user.

The app uses a Node.js backend to serve mock shift data and handles all booking logic. The UI is designed with cards, colors, and headers for an intuitive and visually appealing experience.

# Install dependencies

npm i

## Start the backend
cd backend   
npm i

node server.js

## Start the frontend
cd ../
npx expo start


