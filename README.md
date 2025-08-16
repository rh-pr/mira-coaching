# Mira Coaching

This repository contains the source code for the Mira Coaching web application, designed to help teams and individuals with coaching, workshops, and teambuilding.

## Project Structure

- `client/` – React frontend application
- `server/` – Node.js/Express backend API
- `.env` – Environment variables (not tracked in git)
- `.gitignore` – Files and folders excluded from version control

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mira-coaching.git
   cd mira-coaching
   ```

2. Install dependencies for both client and server:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the App

#### Development

- **Client:**
  ```sh
  cd client
  npm start
  ```
- **Server:**
  ```sh
  cd server
  npm run dev
  ```

#### Production

- Build the client:
  ```sh
  cd client
  npm run build
  ```
- Start the server:
  ```sh
  cd server
  npm start
  ```

## Features

- Contact form for inquiries
- Review submission modal
- Responsive design
- Team and workshop offers

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
