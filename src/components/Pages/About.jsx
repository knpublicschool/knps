import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class About extends Component {
    handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling effect
        });
    };
    render() {
        return (
            <>
                <div>
                    <section id="about" class="container py-5">
                        {/* <!-- Section Title --> */}
                        <div class="text-center mb-5">
                            <h1 class='display-5 fw-bold text-primary'>K.N Public School</h1>
                            <p class={`lead ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>"Foundation of Education, Pathway to a Bright Future."</p>
                        </div>

                        {/* <!-- Welcome Message --> */}
                        <div class="row mb-4">
                            <div class="col-md-8 mx-auto">
                                <h2 class='fw-bold text-secondary text-center'>Welcome to K N PUBLIC SCHOOL</h2>
                                <p class={`text-center ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Welcome to KNPS! We are thrilled to have you as part of our vibrant school community. At KNPS, we are dedicated to providing an inclusive and nurturing environment where every student can thrive our passionate educators for tirelessly to inspire curiosity and a love for learning in each child. As you explore our school, you will discover a place where academic excellence meets creativity, character development, and a commitment to making a positive impact in the world together embark on an exciting journey of growth and discovery!</p>
                            </div>
                        </div>

                        {/* <!-- Mission, Vision, and History Cards --> */}
                        <div class="row text-center">
                            <div class="col-md-4 scale">
                                <div class={`card ${this.props.mode === 'light' ? 'box-shadow-black' : 'box-shadow-white'} border-0 mb-4 ${this.props.mode === 'light' ? 'bg-light' : 'bg-dark'}`}>
                                    <div class="card-body">
                                        <h5 class="card-title text-primary fw-bold">Our Mission</h5>
                                        <p class={`card-text text-center ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>To foster a love for learning through a supportive, inclusive, and innovative environment.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 scale">
                                <div class={`card ${this.props.mode === 'light' ? 'box-shadow-black' : 'box-shadow-white'} border-0 mb-4 ${this.props.mode === 'light' ? 'bg-light' : 'bg-dark'}`}>
                                    <div class="card-body">
                                        <h5 class="card-title text-primary fw-bold">Our Vision</h5>
                                        <p class={`card-text text-center ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Preparing global citizens with resilience, curiosity, and integrity to make a positive impact on the world.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 scale">
                                <div class={`card ${this.props.mode === 'light' ? 'box-shadow-black' : 'box-shadow-white'} border-0 mb-4 ${this.props.mode === 'light' ? 'bg-light' : 'bg-dark'}`}>
                                    <div class="card-body">
                                        <h5 class="card-title text-primary fw-bold text-center">Our History</h5>
                                        <p class={`card-text text-center ${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Founded in 2023.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Facilities and Academic Programs --> */}
                        <div class="row my-5 mx-1">
                            <div class="col-md-9">
                                <h3 class="fw-bold text-secondary">Our Facilities</h3>
                                <p class={`${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Our campus provides modern classrooms, science and computer labs, athletic fields, and an inspiring digital learning center to support our students’ growth.</p>
                            </div>
                            <Link className='text center btn btn-success' style={{textDecoration:'none',color:'white'}} onClick={this.handleScrollToTop} to='/about/academicprograms'>Open academics</Link>

                        </div>

                        {/* <!-- Community and Extracurriculars --> */}
                        <div class="row">
                            <div class="col-md-6">
                                <h3 class="fw-bold text-secondary">Community & Extracurriculars</h3>
                                <p class={`${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Our extracurriculars include sports, drama, debate, art, and robotics clubs. Community projects encourage students to make a positive impact.</p>
                            </div>
                            <div class="col-md-6">
                                <h3 class="fw-bold text-secondary">Meet Our Faculty</h3>
                                <p class={`${this.props.mode === 'light' ? 'text-black' : 'text-white'}`}>Our passionate, experienced teachers are dedicated to inspiring each student’s best. Led by Principal Girish Yadav, they are here to support each student’s journey.</p>
                            </div>
                        </div>
                    </section >
                </div >
            </>
        )
    }
}