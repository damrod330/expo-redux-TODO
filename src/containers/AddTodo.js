import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    text: "Odebrać zamówienie jedzenia"
  };

  handleOnChangeText = text => {
    this.setState({ text: text });
  };

  addTodo = text => {
    // update store
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={styles.addTodoContainer}>
        <TextInput
          onChangeText={text => this.handleOnChangeText(text)}
          value={this.state.text}
          placeholder="add stuff You want to do"
          style={styles.addTodoInput}
        />
        <TouchableOpacity
          onPress={() => this.addTodo(this.state.text)}
          style={styles.addTodoBtn}
        >
          <MaterialIcons name="add-box" size={54} style={styles.addTodoIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addTodoContainer: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  addTodoInput: {
    height: 44,
    flex: 1,
    borderColor: "teal",
    borderBottomWidth: 1,
    padding: 8,
    backgroundColor: "white",
    color: "grey"
  },
  addTodoBtn: {
    alignItems: "center",
    height: 54
  },
  addTodoIcon: {
    color: "teal"
  }
});

export default connect()(AddTodo);
