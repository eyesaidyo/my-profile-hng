const ContactMe=()=>{
return (
  <div className="contact-page">
    <h3>contact me</h3>
    <p>reach out to me about any questions you may have</p>
    <form className="contact-form">
    <label for='first_name'>First Name</label>
    <input  type='text' placeholder="enter your first name" id="first_name" name="first_name"></input>
    <label for='last_name'>Last Name</label>
    <input type='text' placeholder="enter your last name" id="last_name" name='last_name' ></input>
    <label for='email'>Email</label>
    <input type='email' placeholder="example@email.com" id="email" name='email' ></input>
    </form>
  </div>
)
}

export default ContactMe