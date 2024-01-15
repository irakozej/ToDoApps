// YourComponent.js
import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { addTask, updateTask, deleteTask, fetchTasks } from "./database";
import { addTaskApi, updateTaskApi, deleteTaskApi, fetchTasksApi } from "./api";
import { scheduleNotification } from "./pushNotifications";

const YourComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks(setTasks);
  }, []);

  const handleAddTask = async () => {
    const taskId = await addTaskApi("New Task", "Description", "2024-01-15");
    addTask("New Task", "Description", "2024-01-15", (taskId) => {
      fetchTasks(setTasks); // Fetch tasks again to update the list
      scheduleNotification(
        "Task Reminder",
        "Your task is due soon!",
        new Date(Date.now() + 10 * 1000)
      ); // Schedule notification after 10 seconds
    });
  };

  const handleUpdateTask = async (id) => {
    await updateTaskApi(
      id,
      "Updated Task",
      "Updated Description",
      "2024-01-20"
    );
    updateTask(id, "Updated Task", "Updated Description", "2024-01-20");
    fetchTasks(setTasks);
  };

  const handleDeleteTask = async (id) => {
    await deleteTaskApi(id);
    deleteTask(id);
    fetchTasks(setTasks);
  };

  return (
    <View>
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.dueDate}</Text>
            <Button title="Update" onPress={() => handleUpdateTask(item.id)} />
            <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default YourComponent;
