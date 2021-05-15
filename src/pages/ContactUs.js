import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "axios";

const formGroupStyle = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const errorMessageStyle = {
  backgroundColor: "#FF6961",
  padding: "0.5rem",
};

const successMessageStyle = {
  backgroundColor: "#77dd77",
  padding: "0.5rem",
};

const ErrorMessage = ({ errorText }) => (
  <div style={errorMessageStyle}>
    <b>Error</b>: {errorText}
  </div>
);

const SuccessMessage = ({ successText }) => (
  <div style={successMessageStyle}>
    <b>Success</b>: {successText}
  </div>
);

const FormElement = ({ labelText, errorText, children }) => (
  <React.Fragment>
    <div style={formGroupStyle}>
      <div>{labelText}</div>
      <div>{children}</div>
    </div>
    {errorText ? <ErrorMessage errorText={errorText} /> : null}
  </React.Fragment>
);

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitting: false,
    fieldErrors: {},
    error: "",
    success: false,
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      fieldErrors: {},
      success: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;
    this.setState({ submitting: true });

    const contactEndpoint =
      "https://5fs0uj97k4.execute-api.us-east-1.amazonaws.com/beta/contact";

    axios
      .post(contactEndpoint, {
        name: name,
        email: email,
        message: message,
      })
      .then((_) => {
        this.setState({
          success: true,
          message: "",
        });
      })
      .catch((err) => {
        const responseData = err.response.data;
        if (
          "message" in responseData &&
          "field_errors" in responseData.message
        ) {
          const fieldErrors = responseData.message["field_errors"];
          this.setState({ fieldErrors });
        }
      })
      .finally((_) => this.setState({ submitting: false }));
  };

  render() {
    const { submitting, fieldErrors, error, success } = this.state;
    const {
      name: nameError,
      email: emailError,
      message: messageError,
    } = fieldErrors;

    return (
      <div style={{ padding: "2rem", maxWidth: "500px" }}>
        <h1> Contact Us </h1>
        <form onSubmit={this.handleSubmit}>
          <FormElement labelText="Name" errorText={nameError}>
            <input
              style={{ width: "100%" }}
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </FormElement>
          <FormElement labelText="Email" errorText={emailError}>
            <input
              style={{ width: "100%" }}
              type="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormElement>
          <FormElement labelText="Message" errorText={messageError}>
            <textarea
              style={{ width: "100%" }}
              rows="6"
              type="text"
              name="message"
              //required
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </FormElement>

          {error ? <ErrorMessage errorText={error} /> : null}
          {success ? <SuccessMessage successText={"Message sent"} /> : null}

          <button
            style={{ marginTop: "2rem" }}
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById("root"));
