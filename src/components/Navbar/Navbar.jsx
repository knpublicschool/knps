import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Utils/custom.css"


export default class Navbar extends Component {

  handleCollapse = () => {
    const navbarToggle = document.getElementById('navbarSupportedContent');
    if (navbarToggle.classList.contains('show')) {
      navbarToggle.classList.remove('show');
    }
  };

  componentDidMount = () => {
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0; // Changed to 'let' to allow reassignment

    window.addEventListener("scroll", function () {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Avoid deprecated 'pageYOffset'

      if (currentScroll > lastScrollTop) {
        navbar.classList.add("show-navbar");
      } else if (currentScroll === 0) {
        navbar.classList.remove("show-navbar");
      }

      lastScrollTop = currentScroll; // Update the variable
    });
  };

  render() {
    return (
      <>
        <div>
          <nav id="navbar" class="p-0 navbar navbar-alag navbar-expand-lg navbar-dark fixed-top hidden-navbar">
            <div class="container d-flex align-items-center justify-content-center">
              <a class="navbar-brand m-0" href="/">
                <img src="/SchoolLogo.jpg" alt="Logo" style={{ borderRadius: "50%" }} width="60" height="60" class="d-inline-block align-text-top" />
              </a>
            </div>
          </nav>
        </div>
        <div className='mx-2 my-2'>
          {/* navbar-light box-shadow-primary */}
          <nav className={`rounded navbar navbar-expand-lg border border-warning `}>
            <div className="container-fluid">
              <div className='d-flex justify-content-start align-items-center'>
                <img src="/SchoolLogo.jpg" className="mx-auto d-block" alt="school logo" style={{ width: "65px", borderRadius: "50%" }} />
              </div>
              <NavLink className="navbar-brand mx-3" to="/"><strong className='display-6n'>K.N.P.S</strong></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse nav justify-content-center navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                  <li className="nav-item">
                    <NavLink className="nav-link display-nav" onClick={this.handleCollapse} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link display-nav" onClick={this.handleCollapse} to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link display-nav" onClick={this.handleCollapse} to="/students">Students</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link display-nav" onClick={this.handleCollapse} to='/teachers'>Teachers</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link display-nav" onClick={this.handleCollapse} to="/admission">Admissions</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink className="nav-link display-nav" onClick={this.handleCollapse} to="/results">Results</NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink className="nav-link display-nav" onClick={this.handleCollapse} to="/contact">Contact</NavLink>
                  </li>
                </ul>
                {/* <div className={`form-check form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input type="checkbox" className='form-check-input' onChange={this.handleCollapse} onClick={this.props.toggleMode} />
                  <label htmlFor='flexSwitchCheckDefault' className="form-check-label">{`${this.props.mode === 'light' ? 'dark' : 'light'} mode`}</label>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }
}

