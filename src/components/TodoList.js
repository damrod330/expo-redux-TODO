import React from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ScrollView style={styles.listContainer}>
      {todos.map(({ id, text, completed }) => (
        <TouchableOpacity
          key={id}
          onPress={() => toggleTodo(id)}
          style={styles.listItem}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: completed ? "grey" : "black",
              textTransform: "uppercase",
              fontWeight: completed ? "normal" : "bold",
              textDecorationLine: completed ? "line-through" : "none"
            }}
          >
            {text}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 12
  },
  listItem: {
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    borderStyle: "dotted"
  }
});
