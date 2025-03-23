# Full-Stack Technical Vlog Platform

A Full-Stack technical vlog platform enabling tech enthusiasts to share and explore technical content seamlessly.

## Features

- Secure authentication using JWT.
- Scalable backend supporting over 1,000 active users and managing up to 10,000 vlogs.
- Rich text editor with support for images, code snippets, and links.
- Responsive UI ensuring seamless access across devices.
- Search and filter functionalities for improved content discovery.

## Technologies Used

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JSON Web Token (JWT)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/your-username/technical-vlog-platform.git
cd technical-vlog-platform
```

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

## Usage
1. Register or log in using a valid account.
2. Create and publish technical vlogs using the rich text editor.
3. Explore and discover vlogs using search and filter functionalities.
4. Engage with the community by sharing technical knowledge.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Vlogs
- `GET /api/vlogs` - Fetch all vlogs
- `POST /api/vlogs` - Create a new vlog
- `GET /api/vlogs/:id` - Fetch a specific vlog
- `PUT /api/vlogs/:id` - Update a vlog
- `DELETE /api/vlogs/:id` - Delete a vlog

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your fork and submit a pull request.

## License
This project is licensed under the MIT License.

