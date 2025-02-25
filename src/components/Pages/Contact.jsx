import React, { Component,createRef } from 'react'
import AddressCard from '../Utils/AddressCard'
import emailjs from 'emailjs-com';


export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      loading: false,
      toastMessage: "",
      toastType: "success",
    };
    this.formRef = createRef();
    this.toastRef = createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  
  handleSubmit(event) {
    event.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          subject: this.state.subject,
          message: this.state.message,
        },
        import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          this.showToast("Email sent successfully! 🎉", "success");
          alert("Message sent successfully!");
          this.setState({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          this.showToast("Failed to send email. Try again! ❌", "danger");
          console.error("Email sending error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        this.setState({ loading: false });
    });
  }

  showToast = (message, type) => {
    this.setState({ toastMessage: message, toastType: type });

    // Show Bootstrap toast
    const toast = new window.bootstrap.Toast(this.toastRef.current);
    toast.show();
};

  handleToast() {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
  }


  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            {/* Left Column: Address & Social Media */}
            <div className="col-md-5">
              <div className="scale contact-card contact-card rounded p-2">
                <h3 className='contact-text'>Contact Information</h3>
                <div className="contact-item d-flex align-items-center gap-3">
                  <span className="icon me-3 fs-4">📍</span>
                  <div>
                    <strong>School Address</strong>
                    <p className='contact-text'>Behind Fauji restaurant, Dhhanapur Bharat Pur Road, Mathura</p>
                  </div>
                  <div>
                    <AddressCard />
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center mb-3">
                  <span className="icon me-3 fs-4">📞</span>
                  <div>
                    <strong>Phone : </strong>
                    <a href="tel:8077640656" className='text-decoration-none'>+91 8077640656</a>
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center">
                  <span className="icon me-3 fs-4">✉️</span>
                  <div>
                    <strong>Email : </strong>
                    <a href="mailto:knps.work@gmail.com" className="text-decoration-none">knps.work@gmail.com</a>
                  </div>
                </div>
              </div>
              <hr />

              <div className='scale rounded contact-follow mb-3 p-2'>

                <h3>Follow us</h3>
                <ul className="list-unstyled  d-flex gap-2 flex-column">
                  <li>
                    <a href="#" className="d-flex align-items-center text-decoration-none">
                      <i className="fa fa-instagram fa-lg me-2"> Instagram</i>.
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center text-decoration-none">
                      <i className="fab fa-youtube fa-lg me-2"> Youtube</i>.
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center text-decoration-none">
                      <i className="fab fa-linkedin fa-lg me-2"> LinkedIn</i>.
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            {/* Right Column: Form */}

            <div className="col-md-7">
              <div className='scale contact-message rounded mb-3 p-2'>
                <h3>General Enquire</h3>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name='name'
                          className="form-control"
                          placeholder="Enter your name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          required
                        />
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <div className="input-group">
                        <input
                          type="email"
                          name='email'
                          className="form-control"
                          placeholder="Enter your email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                        <span className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name='phone'
                          placeholder="Enter your phone"
                          value={this.state.phone}
                          onChange={this.handleChange}
                          required
                        />
                        <span className="input-group-text">
                          <i className="fas fa-phone"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name='subject'
                        placeholder="Enter subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name='message'
                      placeholder="Enter your message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary text-white" onClick={this.handleToast} id="liveToastBtn">
                  {this.state.loading ? "Sending..." : "Send Message"}
                  </button>
                  <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div ref={this.toastRef} id="liveToast" class={`toast text-bg-${this.state.toastType}`} role="alert" aria-live="assertive" aria-atomic="true">
                      <div class="toast-header">
                        <strong class="me-auto">{this.state.toastType}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                      </div>
                      <div class="toast-body">
                      {this.state.toastMessage}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
