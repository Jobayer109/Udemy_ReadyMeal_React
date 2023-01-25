import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const data = {
      enteredName,
      enteredStreet,
      enteredPostalCode,
      enteredCity,
    };
    console.log(data);

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPOstalCodeIsValid = !isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPOstalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPOstalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  //
  const nameClassControl = `${classes.control} ${formInputsValidity.name ? "" : classes.invalid}`;
  const streetClassControl = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeClassControl = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityClassControl = `${classes.control} ${formInputsValidity.city ? "" : classes.invalid}`;

  return (
    <form onSubmit={formHandler} className={classes.form}>
      <div className={nameClassControl}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Input a valid name</p>}
      </div>
      <div className={streetClassControl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Input a valid street</p>}
      </div>
      <div className={postalCodeClassControl}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && <p>Input a valid postal code ( Min 5 chars)</p>}
      </div>
      <div className={cityClassControl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Input a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
