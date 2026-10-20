import styles from "./Contact.module.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contact} name="contact">
      <div className={styles.contactCol}>
        <h3>
          Send us a message <img src={msg_icon} alt="Message icon" />
        </h3>

        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@GreatStack.dev
          </li>

          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>

          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>

      <div className={styles.contactCol}>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Write Your Message Here:</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>

          <button
            type="submit"
            className={`btn dark-btn ${styles.contactBtn}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Now"}
            {!loading && <img src={white_arrow} alt="" />}
          </button>

          {result && <p role="status">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
