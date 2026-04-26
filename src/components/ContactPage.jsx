function ContactPage() {
  return (
    <div>
      <h2 className="page-title">Contact Page</h2>

      <form className="contact-form">
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label>Message:</label>
          <textarea placeholder="Enter your message" rows="5"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;