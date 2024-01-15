// database.js
import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase({
  name: "todoApp.db",
  location: "default",
});

export const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, dueDate TEXT);",
      [],
      (_, result) => {
        console.log("Table created successfully!");
      },
      (_, error) => {
        console.error("Error creating table:", error);
      }
    );
  });
};

export const addTask = (title, description, dueDate, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO tasks (title, description, dueDate) VALUES (?, ?, ?);",
      [title, description, dueDate],
      (_, result) => {
        console.log("Task added successfully!");
        callback(result.insertId);
      },
      (_, error) => {
        console.error("Error adding task:", error);
      }
    );
  });
};

// Implement updateTask, deleteTask, and fetchTasks functions similarly
