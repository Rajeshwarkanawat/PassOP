# PassOP - A Simple Password Manager

PassOP is a web-based password manager built with **React** (frontend) and **Node.js + Express** (backend), with **MongoDB** as the database. It enables users to store, retrieve, update, and delete passwords securely.

## Features
- ✅ Add, edit, delete, and copy passwords  
- ✅ Show/hide password feature  
- ✅ Form validation for secure inputs  
- ✅ Real-time notifications using React Toastify  
- ✅ Responsive UI with Tailwind CSS  

## Tech Stack
### Frontend:
- React  
- Tailwind CSS  
- React Toastify  
- UUID (for unique IDs)  

### Backend:
- Node.js  
- Express.js  
- MongoDB (MongoDB Node.js Driver)  
- Body-parser  
- CORS  

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/RajeshawarKanawat/passop.git
cd passop
```

### 2. Install Dependencies

#### Frontend
```bash
cd client
npm install
npm run dev  # Start React app
```

#### Backend
```bash
cd server
npm install
node index.js  # Start Express server
```

## Environment Variables
Create a `.env` file in the **server** folder and add:
```env
MONGO_URI=mongodb://localhost:27017/passop
PORT=3000
```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/` | Get all stored passwords |
| POST | `/` | Add a new password |
| DELETE | `/` | Delete a password |

## Usage Guide
1. **Enter** website, username, and password  
2. **Save** the password  
3. **View & copy** stored credentials  
4. **Edit or delete** passwords as needed  

## Screenshots
![Image of Website](/public/Look.png)
