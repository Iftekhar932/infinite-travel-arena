import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { Card, Button } from "react-bootstrap";
import Choice from "../Choice/Choice";
// import { Link } from "react-router-dom";

const AllChoices = () => {
  const { user } = useAuth();
  const [choices, setChoices] = useState([]);
  const [displayChoices, setDisplayChoices] = useState([]);
  const [idNumber, setIDNumber] = useState([]); // working
  let idNoArr = []; // using it only for "useState()" above. AM NOT USING IT NOW

  // GET API
  useEffect(() => {
    fetch(`http://localhost:5000/allChoices?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setChoices(data);
        console.log(choices);
        data.map((value) => {
          setIDNumber(value.id);
          console.log(`id:${value.id},  idNumber:  ${idNumber}`);
        });
      });
  }, []);

  // GET API (LINE 89 IN INDEX.JS)
  useEffect(() => {
    fetch(`http://localhost:5000/choiceDataLoad?id=${idNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setDisplayChoices(data);
        console.log(data);
        console.log(displayChoices);
      });
  }, []);

  return (
    <>
      {displayChoices.map((displayChoice) => (
        <Choice displayChoice={displayChoice} key={displayChoice.id}></Choice>
      ))}
    </>
  );
};

export default AllChoices;
