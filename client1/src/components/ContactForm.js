import React from "react";
import "./ContactForm.css";

const ContactForm = ({ fields }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) =>
          field.type === "textarea" ? (
            <textarea
              key={field.id}
              id={field.id}
              placeholder={field.placeholder}
            />
          ) : (
            <input
              key={field.id}
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
            />
          )
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
