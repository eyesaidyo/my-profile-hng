const ContactMe = () => {
  return (
    <div className="contact-page">

      <form className="contact-form">
        <h3 className="form-text">contact me</h3>
        <p className="form-text">reach out to me about any questions you may have</p>
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
        <textarea placeholder='message' id="message" name="message">
        </textarea>
        <div className='checkbox'>
          <input type='checkbox' id='agree' name='agree'></input>
          <label for='agree'>You agree to providing your data to us to contact you</label>
        </div>

        <button className="btn__submit">Send message</button>
      </form>
    </div>
  )
}

export default ContactMe