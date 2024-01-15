// api.js
import axios from "axios";

const BASE_URL = "http://your-api-url"; // Replace with your actual API URL

export const addTaskApi = (title, description, dueDate) => {
  return axios.post(`${BASE_URL}/tasks`, { title, description, dueDate });
};

export const updateTaskApi = (id, title, description, dueDate) => {
  return axios.put(`${BASE_URL}/tasks/${id}`, { title, description, dueDate });
};

export const deleteTaskApi = (id) => {
  return axios.delete(`${BASE_URL}/tasks/${id}`);
};

export const fetchTasksApi = () => {
  return axios.get(`${BASE_URL}/tasks`);
};
