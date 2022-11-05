import Footer from "./Footer"

const ContactMe = () => {
  return (
    <div className="contact-page">

      <form className="contact-form">
        <h2 className="form-text">Contact Me</h2>
        <p className="form-text">Hi, reach out to me about any questions you may have.</p>
        <div className="names">
          <div className="name-item">
            <label className="lbl" for='first_name'>First Name</label>
            <input type='text' placeholder="enter your first name"
              id="first_name" name="first_name"></input>
          </div>


          <div className="name-item">
            <label className="lbl" for='last_name'>Last Name</label>
            <input type='text' placeholder="enter your last name" id="last_name" name='last_name' ></input>
          </div>

        </div>
        <div>
          <label className="input-lbl" for='email'>Email</label>
          <input type='email' placeholder="example@email.com" id="email" name='email' ></input>
        </div>
        <label className="input-lbl" for='message'>Message</label>
        <textarea placeholder="Send me a message and I'll reply as soon as i can." id="message" name="message">
        </textarea>
        <div className='checkbox'>
          <input type='checkbox' id='agree' name='agree'></input>
          <label for='agree'>You agree to providing John Irem with your data to contact you</label>
        </div>

        <button id="btn__submit">Send message</button>
      </form>
      <Footer />
    </div>
  )
}

export default ContactMe