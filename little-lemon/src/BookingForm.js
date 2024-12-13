import { useState } from "react";
import Button from "./Button";

export default function BookingForm(props) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "date":
        if (!value) {
          error = "Date is required.";
        
        } else if (new Date(value) < new Date()) {
          error = "Date cannot be in the past.";
          
        }
        break;

      case "guests":
        if (!value) {
          error = "Number of guests is required.";
          
        } else if (value < 1 || value > 10) {
         
          error = "Guests must be between 1 and 10.";
        }
        break;

      case "time":
        if (!value) {
        
          error = "Time is required.";
        }
        break;

      case "occasion":
        if (!value) {
         
          error = "Occasion is required.";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const isFormValid = () => {
   return (
     Object.values(errors).every((error) => !error) &&
     Object.values(formData).every((value) => value.trim() !== "")
   );
 };//valid check for buton
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let isValid = true;

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      validateField(key, value);
      if (!value || errors[key]) {
        newErrors[key] = errors[key] || "This field is required.";
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      setGlobalError("Please fix the errors above before submitting.");
    } else {
      setGlobalError("");
      props.submitForm(formData);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="res-form">
      <form
        aria-labelledby="booking-form-header"
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px", position: "relative" }}
      >
        {globalError && <p style={{ color: "red", fontWeight: "bold" }}>{globalError}</p>}

        <label htmlFor="res-date">Choose date</label>
        <input
          aria-label="Enter booking date"
          type="date"
          name="date"
          id="res-date"
          data-test-id="dateID"
          onChange={handleChange}
          value={formData.date}
          required
        />
        {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

        <label htmlFor="res-time">Choose time</label>
        <select
          aria-label="choose booking time"
          id="res-time"
          name="time"
          onChange={handleChange}
          value={formData.time}
          required
        >
          <option value="" disabled>
            Choose time
          </option>
          {props.availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}

        <label htmlFor="guests">Number of guests</label>
        <input
         aria-label="Enter guest number maximum number is 10 and minimun is 1"
          type="number"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={handleChange}
          value={formData.guests}
          required
        />
        {errors.guests && <p style={{ color: "red" }}>{errors.guests}</p>}

        <label htmlFor="occasion">Occasion</label>
        <select
          aria-label="Choose occasion"
          id="occasion"
          name="occasion"
          onChange={handleChange}
          value={formData.occasion}
          required
        >
          <option value="">Choose occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && <p style={{ color: "red" }}>{errors.occasion}</p>}

        <Button isdisable={!isFormValid()}>
          Make Your Reservation
        </Button>
      </form>
    </div>
  );
}
