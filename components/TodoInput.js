import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAddNewTask = () => {
    if (task.length > 0) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={task}
        style={styles.input}
        placeholder="Agregar nueva tarea.."
        placeholderTextColor="#B2B2B2"
        returnKeyType="send"
        selectionColor="#666666"
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#B2B2B2" }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: "#EBEBEB",
    color: "#666666",
  },
  addButton: {
    backgroundColor: "#FFF",
    height: 56,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
