import { useState } from 'react';
import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  const [emailAddress, setEmailAddress] = useState("");
  const [emailName, setEmailName] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputName === "emailAddress") {
      setEmailAddress(inputValue);
    } else if (inputName === "emailName") {
      setEmailName(inputValue);
    } else {
      setEmailBody(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(emailAddress) || !emailName || !emailBody) {
      setErrorMessage("Something isn't right. Please check and try again.");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setPassword("");
    setEmail("");
  };

  // //Nodemailer: Create a transporter object
  // const transporter = nodemailer.createTransport({
  //   host: "live.smtp.mailtrap.io",
  //   port: 587,
  //   secure: false, // use SSL
  //   auth: {
  //     user: "1a2b3c4d5e6f7g",
  //     pass: "1a2b3c4d5e6f7g",
  //   },
  // });

  // // Configure the mailoptions object
  // const mailOptions = {
  //   from: `${emailAddress}`,
  //   to: "allrewil@gmail.com",
  //   subject: `Email from ${emailName}, from your Portfolio Page!`,
  //   text: `${emailBody}`,
  // };

  // // Send the email
  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(Error, error);
  //   } else {
  //     console.log("Email sent: " + info.response);
  //   }
  // });

  return (
    <>
      <form className="pageBody" onSubmit={handleFormSubmit}>
        <h2>Contact Me</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="emailName"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="emailAddress"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <textarea
            className="form-control"
            id="emailBody"
            placeholder="Your text here"
            aria-label="With textarea"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="submit"
          // onClick={() =>
          //   sendEmail(`${emailName}, ${emailAddress}, ${emailBody}`)
          // }
          className="btn btn-secondary"
          id="sendButton"
        >
          Send
        </button>
      </form>
    </>
  );
}
