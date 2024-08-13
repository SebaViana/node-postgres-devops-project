# node-postgres-devops-project

### Prerequisites
- Node.js
- PostgreSQL

## Setup Instructions

1. **Install Dependencies**

```bash
cd backend
npm install
```
2. **Set up PostgreSQL database**

- Ensure PostgreSQL is running on your machine.
- Create databases task_manager_dev, task_manager_test, and task_manager_prod according to the environments.

3. **Configure environment variables**

Rename .env.example to .env.
Update the DATABASE_URL and other environment specific settings in .env.


4. **Run migrations**

```bash
npx sequelize-cli db:migrate
```

5. **Start the backend server**

```bash
npm start
```

6. **Install frontend dependencies**

```bash
cd ../frontend
npm install
```

7. **Start the frontend server**

```bash
npm start
```

### Usage

This will start the frontend application, typically available at http://localhost:3000/.

The API endpoints will be available at http://localhost:3000/ by default. Below are some example endpoints:

- POST /tasks - Create a new task
- GET /tasks - Retrieve all tasks
- GET /tasks/:id - Retrieve a task by ID
- PUT /tasks/:id - Update a task
- DELETE /tasks/:id - Delete a task
