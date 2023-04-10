import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme.js";
import { steps } from "../utils/steps.jsx";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "",
      snack: "",
      addOn: "",
      drinks: "",
      size: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { order, addOn, drinks, size, snack } = steps;

    this.setState({ order, addOn, drinks, size, snack });
  }

  render() {
    const { order, addOn, drinks, size, snack } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Order: </td>
              <td>{order.value}</td>
            </tr>
            <tr>
              <td>Snack: </td>
              <td>{snack.value}</td>
            </tr>
            {typeof addOn !== "undefined" && (
              <tr>
                <td>Add On: </td>
                <td>{addOn.value}</td>
              </tr>
            )}
            <tr>
              <td>Drinks: </td>
              <td>{drinks.value}</td>
            </tr>
            <tr>
              <td>Size: </td>
              <td>{size.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};
class SimpleForm extends Component {
  render() {
    console.log(this.props.toggle);
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle={"Chicken-nini🐔"}
          recognitionEnable={false}
          opened={this.props.toggle}
          speechSynthesis={{ enable: true, lang: "en", voice: null }}
        />
      </ThemeProvider>
    );
  }
}

export { SimpleForm };
