import React, { Component } from "react";
import PropTypes from "prop-types";

class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        order: "",
        snack: "",
        addOn: "",
        drinks: "",
        size: "",
        addOn2: "",
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { order, addOn, drinks, size, snack,addOn2 } = steps;
  
      this.setState({ order, addOn, drinks, size, snack, addOn2 });
    }
  
    render() {
      const { order, addOn, drinks, size, snack, addOn2 } = this.state;
      return (
        <div style={{ width: "100%" }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Order: </td>
                <td>{order.value}</td>
              </tr>
              {typeof snack !== "undefined" && (
              <tr>
                <td>Snack: </td>
                <td>{snack.value}</td>
              </tr>
              )}
              {typeof addOn !== "undefined"  && ( addOn.value !== "None") && (
                <tr>
                  <td>Add-On: </td>
                  <td>{addOn.value}</td>
                </tr>
              ) }
              {typeof addOn2 !== "undefined" && ( addOn2.value !== "None") && (
                <tr>
                  <td>Add-On: </td>
                  <td>{addOn2.value}</td>
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

  export default Review;