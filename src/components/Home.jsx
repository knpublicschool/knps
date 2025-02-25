import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import handleScrollToTop from './constantFunction.js';

export default function Home(props) {

  const [enquiry, setEnquiry] = useState({ name: '', email: '', message: '' });
  const [quickContact, setQuickContact] = useState({ name: '', phone: '' });


  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiry({ ...enquiry, [name]: value });
  };

  const handleQuickContactChange = (e) => {
    const { name, value } = e.target;
    setQuickContact({ ...quickContact, [name]: value });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleQuickContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const toastTrigger = () => {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
  }

  return (
    <>

      <div className="container d-flex flex-column gap-3 align-items-center">
        <h1 className='text-center display-1 mx-2'>Kamlesh Devi Natthi Lal Public School</h1>

        {/* Main Content Wrapper */}
        <div className="d-flex flex-column gap-3 flex-md-row align-items-center justify-content-between">

          {/* School Image Section */}
          <div className="text-center">
            <figure className="figure">
              <img src="/image2.png" className="figure-img img-fluid rounded" alt="School Building" />
              <figcaption className="figure-caption text-center">Infrastructure Made Better</figcaption>
            </figure>
          </div>

          {/* Right-Side Content Section */}
          <div className="d-flex flex-column align-items-center text-center">
            <p className="fs-5">
              Welcome to <strong>K N Public School</strong>, where future leaders begin their journey.
            </p>

            {/* Modal Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#enquiryModal">Enquiry Form</button>
              <button className="btn btn-secondary" onClick={handleScrollToTop}><NavLink className="text-decoration-none text-white" to="/admission">Addmision</NavLink></button>
            </div>
          </div>
        </div>

        {/* Enquiry Modal */}
        <div className="modal fade" id="enquiryModal" tabIndex="-1" aria-labelledby="enquiryModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="enquiryModalLabel">Enquiry Form</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleEnquirySubmit}>
                  <div className="mb-3">
                    <label htmlFor="enquiryName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="enquiryName" name="name" value={enquiry.name} onChange={handleEnquiryChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="enquiryEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="enquiryEmail" name="email" value={enquiry.email} onChange={handleEnquiryChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="enquiryMessage" className="form-label">Message</label>
                    <textarea className="form-control" id="enquiryMessage" name="message" value={enquiry.message} onChange={handleEnquiryChange} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" id='liveToastBtn' data-bs-dismiss="modal" aria-label="Close" onClick={toastTrigger}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Toast  */}
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="/SchoolLogo.jpg" class="rounded me-2" alt="..." style={{ width: '10%', height: "auto" }} />
            <strong class="me-auto">KNPS</strong>
            <small>Closed automatically</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Message Sent
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="d-flex align-items-center my-4">
        <div className="flex-grow-1 border-top border-3 border-warning"></div>
        <div className="d-flex align-items-center mx-3 text-center">
          <i className="fas fa-chalkboard-teacher fs-3 text-primary"></i>
          <span className="ms-2 fw-bold text-warning">Quality Education for a Brighter Future</span>
        </div>
        <div className="flex-grow-1 border-top border-3 border-primary"></div>
      </div>

      <div className='container '>
        <h1 className='text-center display-5 mx-2'>"Creating Memories, Inspiring Futures - A Look at Our School!"</h1>
        <div className="d-flex flex-column gap-3 flex-md-row my-3">
          <div className={`rounded ${props.mode === 'light' ? 'modal-light' : 'modal-dark'}bg-light`} >
            {/* style={{ maxWidth: "35rem" }} */}
            <div className={`card mx-2 my-2 ${props.mode === 'light' ? 'modal-light' : 'modal-dark'}`} >
              <figure className='figure'>
                <img src="./photo-1.jpg" className="figure-img img-fluid rounded" alt="..." />
              </figure>

              {/* <div className="card-body"> */}
              <p className={`figure-caption text-center ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>Welcome to K.N Public School, where future leaders begin their journey.</p>
              {/* </div> */}
            </div>

            {/* <div className='my-2'> */}
            <div className='modal fade' id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
              <div className='modal-dialog modal-dialog-centered'>
                <div className={`modal-content ${props.mode === 'light' ? 'modal-light' : 'modal-dark'}`}>
                  <div className="card">
                    <img src="./photo-1.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className={`modal-body ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>
                    "Exploring our rich history at Taj Mahal : where every dtone has a story and every moment inspires us to appreciate our culural heritage."
                  </div>
                  <div className="modal-footer">
                    <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'dark'}`} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className={`modal-content ${props.mode === 'light' ? 'modal-light' : 'modal-dark'}`}>
                  <div className="card">
                    <img src="./photo-2.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className={`modal-body ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>
                    "Together we learn, grow, and create lasting memories - a snapshot of our school sprit!."
                  </div>
                  <div className="modal-footer d-flex justify-content-between">
                    <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'dark'}`} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Previous</button>
                    <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'dark'}`} data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className={`modal-content ${props.mode === 'light' ? 'modal-light' : 'modal-dark'}`}>
                  <div className="card">
                    <img src="./photo-3.jpg" className="card-img-top" alt="..." />
                  </div>
                  <div className={`modal-body ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>
                    "Smiling faces, shared moments, and memories that last a lifetime - our school family."
                  </div>
                  <div className="modal-footer d-flex justify-content-between">
                    <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'dark'}`} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Previous</button>
                    <button className={`btn btn-${props.mode === 'light' ? 'warning' : 'dark'}`} data-bs-dismiss="modal" aria-label="Close" >Close</button>
                    <button className='btn bg-warning-subtle' data-bs-dismiss="modal" aria-label="Close" >Close</button>
                    {/* <button className={`btn btn-${props.mode==='light'?'warning':'dark'}`} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Next</button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <button className="btn btn-warning mx-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Explore More</button>
            </div>
            {/* </div> */}
          </div>

          <div className='rounded'>
            <div className='p-2'>
              <h1 className='text-center p-2 fs-1 fw-bold'>K N Public School</h1>
              <p className='text-center fs-7 display-7'>"Empowering young minds in the heart of our village, <strong className='display-7 u'>K N Public School</strong> is dedicated to providing quality education has inspires growth, curiosity, and achievemnet. Here, every child's potential is nurtured with care and commitment."</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

