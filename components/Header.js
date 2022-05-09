import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export function Header({ tasksCounter }) {
  const tasksCounterText = tasksCounter === 1 ? "tarea" : "tareas";

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>CoderTODO</Text>

      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Tienes </Text>
        {
          <Text style={styles.tasksCounterBold}>
            {tasksCounter} {tasksCounterText}
          </Text>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: "#899446",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tasks: {
    alignItems: "center",
    flexDirection: "row",
  },
  tasksCounter: {
    fontSize: 15,
    color: "#FFF",
  },
  tasksCounterBold: {
    fontSize: 15,
    color: "#FFF",
  },
  appTitle: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
});
