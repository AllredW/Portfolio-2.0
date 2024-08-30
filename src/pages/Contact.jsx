// Importing NodeMailer, to send email from input
let transporter = nodemailer.createTransport(transport[defaults])

export default function ContactPage() {
  var message = {
    from: `${emailAddress}`,
    to: "allrewil@gmail.com",
    subject: `Message from Portfolio 2.0, from ${emailName}`,
    text: `${emailBody}`,
  };

  const sendEmail = () => {
    if (!emailName) {
      
    }
  };
    return (
      <>
      <h2>Contact Me</h2>
      <div className="input-group mb-3">
  <input type="text" className="form-control" id="emailName" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" id="emailAddress" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
</div>

<div className="input-group">
  <textarea className="form-control" id="emailBody" placeholder="Your text here" aria-label="With textarea"></textarea>
</div>
<button type="button" onClick={() => sendEmail(`${emailName}, ${emailAddress}, ${emailBody}`)} className="btn btn-secondary" id="sendButton">Send</button>
      </>
    );
  }