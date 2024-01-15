// api.js
import axios from "axios";

const BASE_URL = "http://your-api-url"; // Replace with your actual API URL

export const addTaskApi = (title, description, dueDate) => {
  return axios.post(`${BASE_URL}/tasks`, { title, description, dueDate });
};

// Implement updateTaskApi, deleteTaskApi, and fetchTasksApi functions similarly
mv A/* B/