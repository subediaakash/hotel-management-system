# Hotel Management System

## Overview

This Hotel Management System is a full-stack application designed to provide users with a seamless experience for searching and booking hotels in various locations. Key features include:

- **Search for Hotels**: Users can search for hotels across different locations.
- **Room Booking**: Book rooms based on the number of people visiting.
- **Pseudo Payment System**: Make payments using a credit card simulation.
- **Booking History**: View a record of all past bookings.
- **Admin Features**: Admin users can manage locations and add new hotels.

## Features

- **User**:
  - Search for hotels by location.
  - Book rooms based on group size.
  - Make pseudo payments via a credit card form.
  - View booking history for past reservations.
- **Admin**:
  - Add new hotel locations.
  - Manage existing hotels (add, update, or delete).

## Tech Stack

- **Frontend**:

  - React
  - React Query (for data fetching and caching)
  - Lucide-react-icons (for icons)
  - Shacn (for styling)

- **Backend**:
  - Express (for server-side logic)
  - Multer (for file uploads)
  - Cloudinary (for storing hotel images)
  - Docker (for containerization)

## Setup Guide

### 1. Clone the Repository

```bash
git clone <repo-link>
```

### 2. Set up the Backend

Navigate to the backend folder and run Docker:

```bash
cd hotelManagementSystem/backend
sudo docker compose up
npm run dev
```

### 3. Set up the Frontend

Navigate to the frontend folder and start the development server:

```bash
cd ../frontend
npm run dev
```

### 4. Add Hotels and Locations

- Sign up as an **Admin** to add new hotels and manage locations.

Once everything is set up, you are ready to explore and use the Hotel Management System!

---

Enjoy your hotel booking experience!
