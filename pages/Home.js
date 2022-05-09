import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTaskTitle) {
    const createdTaskIndex = tasks.findIndex(
      (task) => task.title === newTaskTitle
    );
    if (createdTaskIndex >= 0) {
      return Alert.alert(
        "Tarea ya registrada",
        "No puedes registrar una tarea con el mismo nombre.",
        [{ text: "OK", onPress: () => {} }]
      );
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleToggleTaskDone(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index >= 0) {
      const taskList = tasks.map((task) => ({ ...task }));
      taskList[index].done = !taskList[index].done;
      setTasks(taskList);
    }
  }

  function handleRemoveTask(id) {
    Alert.alert(
      "Eliminar Tarea",
      "¿Está seguro de que desea eliminar este elemento?",
      [
        { text: "No", onPress: () => {} },
        {
          text: "Si",
          onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
        },
      ]
    );
  }

  function handleEditTask(taskId, taskNewTitle) {
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index >= 0) {
      const taskList = tasks.map((task) => ({ ...task }));
      taskList[index].title = taskNewTitle;
      setTasks(taskList);
    }
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        editTask={handleEditTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
