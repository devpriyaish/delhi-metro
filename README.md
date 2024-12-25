# Delhi Metro Map Project

This project aims to create a user-friendly Delhi Metro Map application using **React + Vite** for the frontend and **FastAPI** for the backend. The application will provide an interactive and visually appealing metro map with features to search routes, calculate fares, and more.

---

## **Project Structure**

```plaintext
delhi-metro-map/
├── backend/       # Backend application (FastAPI)
│   ├── app/       # Main application code
│   ├── requirements.txt  # Python dependencies
│   └── Dockerfile # Docker configuration for the backend
├── frontend/      # Frontend application (React + Vite)
│   ├── src/       # React application source code
│   ├── public/    # Static files
│   ├── package.json       # Node.js dependencies
│   └── Dockerfile         # Docker configuration for the frontend
├── docker-compose.yml     # Docker Compose configuration
├── README.md      # Project documentation (this file)
└── .gitignore     # Git ignore rules
```

---

## **Features**

- Interactive Delhi Metro Map.
- Route search and fare calculation.
- Fast and responsive user interface with React + Vite.
- Backend API powered by FastAPI for efficient data handling.
- Dockerized setup for easy deployment.

---

## **Prerequisites**

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for local frontend development)
- [Python 3.8+](https://www.python.org/) (for local backend development)

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone git@github.com:devpriyaish/delhi-metro.git
cd delhi-metro-map
```

### **2. Backend Setup**

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```
   Backend will be available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)

### **3. Frontend Setup**

1. Navigate to the `frontend/` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Frontend will be available at: [http://127.0.0.1:5173](http://127.0.0.1:5173)

### **4. Run with Docker**

1. Build and start the containers using Docker Compose:
   ```bash
   docker-compose up --build
   ```
2. Verify services:
   - Backend: [http://127.0.0.1:8000](http://127.0.0.1:8000)
   - Frontend: [http://127.0.0.1:5173](http://127.0.0.1:5173)

---

## **Environment Variables**

Add environment variables as needed in `.env` files for both the backend and frontend. Ensure sensitive data is not committed to the repository.

---

## **Contributing**

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## **Contact**

For any queries or support, please contact [dpshiv12@gmail.com](dpshiv12@gmail.com).

---

Happy coding! 🎉

