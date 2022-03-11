import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const RatingForm = () => {
  const { user } = useAuth();
  const reviewRef = useRef();

  const submitHandler = (e) => {
    // const email = emailRef.current.value;
    const review = reviewRef.current.value;
    const reviews = { email: user.email, review: review };

    fetch("http://localhost:5000/ratingform", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    e.target.reset();
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="form-h-text">Give A Review</h1>
      <div className="form-box">
        <Form onSubmit={submitHandler}>
          {/*   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              value={user.email}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write A review</Form.Label>
            <Form.Control
              ref={reviewRef}
              placeholder="Write a review"
              as="textarea"
              rows={2}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RatingForm;
