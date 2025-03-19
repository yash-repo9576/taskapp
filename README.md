# Task Management Application

This repository contains a full-stack application.

## Architecture

- **Backend**: Python Flask API
- **Frontend**: React application

## Application Features

The application is a simple task management system with the following features:

- View a list of tasks
- Add new tasks
- Update task status

## Building Docker Images

### Backend
```bash
cd Backend
docker build -t taskapp-backend:latest .

# Run this Container
docker run -d \
   -p 5000:5000 \
   --name taskapp-backend \
   taskapp-backend:latest
```

### Frontend
```bash
cd Frontend
docker build -t taskapp-ui:latest .

# Run the Frontend Container
docker run -d \
   -p 80:80 \
   -e BACKEND_URL=http://localhost:5000 \
   --name taskapp-ui \
   taskapp-ui:latest
```

## Project Structure

- `backend/`: Python Flask API
- `frontend/`: React application

## Testing Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
python wsgi.py
```

The API will be available at http://localhost:5000

### Frontend

```bash
cd frontend
npm install
npm start
```

The application will be available at http://localhost:3000

## License

This project is licensed under the MIT License - see the LICENSE file for details.
