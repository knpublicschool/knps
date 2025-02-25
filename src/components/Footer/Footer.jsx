import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddressCard from '../Utils/AddressCard';

export default class Footer extends Component {

  handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling effect
    });
  };

  render() {
    return (
      <>
        <div className={`mx-2 my-2 rounded light-footer`}>
          <div className="container ">
            <footer className="py-5">
              <div className="row d-flex justify-content-between">
                <div className={`col-6 col-md mb-1 ${this.props.mode === 'light' ? 'text-black' : 'text-white'} `}>
                  <h5>Section</h5>
                  <ul className='nav flex-column'>
                    <li className="nav-item mb-2" style={{ textDecoration: 'none' }} ><Link onClick={this.handleScrollToTop} to="/" className={`nav-link p-0 ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Home</Link></li>
                    <li className="nav-item mb-2" style={{ textDecoration: 'none' }} ><Link onClick={this.handleScrollToTop} to="/about" className={`nav-link p-0 ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>About</Link></li>
                    <li className="nav-item mb-2" style={{ textDecoration: 'none' }} ><Link onClick={this.handleScrollToTop} to="/students" className={`nav-link p-0 ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Students</Link></li>
                    <li className="nav-item mb-2" style={{ textDecoration: 'none' }} ><Link onClick={this.handleScrollToTop} to="/teachers" className={`nav-link p-0 ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Teachers</Link></li>
                    <li className="nav-item mb-2" style={{ textDecoration: 'none' }} ><Link onClick={this.handleScrollToTop} to="/admission" className={`nav-link p-0 ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Admissions</Link></li>
                    <li className="nav-item mb-2" style={{ textDecoration: 'none' }} ><Link onClick={this.handleScrollToTop} to="/results" className={`nav-link p-0 ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Results</Link></li>
                    <li className="nav-item mb-2" style={{ textDecoration: 'none' }} ><Link onClick={this.handleScrollToTop} to="/contact" className={`nav-link p-0 ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Contact</Link></li>
                  </ul>
                </div>

                <div className="col-md-4 offset-md-1 mb-3">
                  <a href="/">
                    <img className='footer-image' src="/SchoolLogo.jpg" alt="knps" />
                  </a>
                </div>

                <div className='col-md-5'>
                  <div className="scale footer-contact rounded p-2">
                    <h3>Contact Information</h3>
                    <div className="contact-item d-flex align-items-center gap-3">
                      <span className="icon me-3 fs-4">📍</span>
                      <div>
                        <strong>School Address</strong>
                        <p>Behind Fauji restaurant, Dhhanapur Bharat Pur Road, Mathura</p>
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
                </div>

              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p className={`${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>&copy; 2025 KN PUBLIC SCHOOL, All rights reserved.</p>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <p className={`${this.props.mode === 'light' ? 'text-black' : 'text-white'} mb-0`}>
                    Designed and Developed By Harsh Yadav
                  </p>
                  <a href="https://github.com/HarshYadav152" target="_blank" rel="noopener noreferrer">
                    <img src="./github-mark-white.png" alt="GitHub" style={{ width: '40px' }} />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    )
  }

}