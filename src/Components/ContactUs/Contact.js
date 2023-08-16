import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formInputs = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
    };

    postItems(formInputs);
  };

  const postItems = async (users) => {
    const result = await fetch(
      "https://contacted-user-list-default-rtdb.firebaseio.com/UserList.json",
      {
        method: "POST",
        body: JSON.stringify(users),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result.status);
  };
  return (
    <div
      style={{
        margin: "2% 20%",
        padding: "2%",
        background: "lightblue",
        borderRadius: "10%",
      }}
    >
      <h1>Contact Us</h1>
      <div align="center">
        <p>Let's get connected</p>
      </div>
      <hr />
      <Form bg="dark" className="m-5 p-2" onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameInput} type="text" placeholder="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailInput}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            ref={phoneInput}
            type="number"
            placeholder="enter mobile number"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <br />
        <Link to="/Store">Back to HomePage</Link>
      </Form>
    </div>
  );
};

export default Contact;
