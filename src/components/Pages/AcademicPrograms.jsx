import React, { Component } from 'react'

export default class AcademicPrograms extends Component {
    render() {
        return (
            <div>
                {/* <!-- Academic Programs Section --> */}

                {/* <Navbar mode={this.state.mode} toggleMode={this.toggleMode} /> */}

                    <section id="academic-programs" class="container py-5">
                    <div class="text-center mb-5">
                        <h1 class="display-6 fw-bold text-primary">Academic Programs</h1>
                        <p class="lead text-muted">Comprehensive learning paths from Nursery through Grade 12, focused on holistic development.</p>
                    </div>

                    {/* <!-- Early Years --> */}
                    <div class={`row justify-content-center mb-5`}>
                        <div class="col-md-8">
                            <h3 class="fw-bold text-secondary">Early Years Program</h3>
                            <p class="mb-3">Designed for Nursery, LKG, and UKG, our Early Years program focuses on building foundational skills through play, exploration, and creativity.</p>
                            <ul class={`list-group`}>
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>  
                                    <span class="me-3 text-primary"><i class="bi bi-brightness-high"></i></span>
                                    <div>
                                        <h5 class="mb-0">Play-Based Learning</h5>
                                        <p class="mb-0 text-muted">Interactive activities that develop cognitive, social, and emotional skills.</p>
                                    </div>
                                </li>
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`} >
                                    <span class="me-3 text-success"><i class="bi bi-palette"></i></span>
                                    <div>
                                        <h5 class="mb-0">Art & Craft</h5>
                                        <p class="mb-0 text-muted">Encouraging creativity and self-expression through hands-on art projects.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Primary School --> */}
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-8">
                            <h3 class="fw-bold text-secondary">Primary School Program (Grades 1-5)</h3>
                            <p class="mb-3">Our primary school curriculum builds essential literacy, numeracy, and social skills while fostering a love for learning.</p>
                            <ul class="list-group">
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-primary"><i class="bi bi-book"></i></span>
                                    <div>
                                        <h5 class="mb-0">Core Subjects</h5>
                                        <p class="mb-0 text-muted">Comprehensive courses in Mathematics, Science, and Language Arts.</p>
                                    </div>
                                </li>
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-danger"><i class="bi bi-puzzle"></i></span>
                                    <div>
                                        <h5 class="mb-0">Creative Learning</h5>
                                        <p class="mb-0 text-muted">Project-based learning that encourages curiosity and creativity.</p>
                                    </div>
                                </li>
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-info"><i class="bi bi-globe"></i></span>
                                    <div>
                                        <h5 class="mb-0">Social Studies</h5>
                                        <p class="mb-0 text-muted">Introduction to history, geography, and community concepts.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Middle School --> */}
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-8">
                            <h3 class="fw-bold text-secondary">Middle School Program (Grades 6-8)</h3>
                            <p class="mb-3">The middle school curriculum deepens understanding in core subjects while introducing new areas of interest and skill-building opportunities.</p>
                            <ul class="list-group">
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-primary"><i class="bi bi-microscope"></i></span>
                                    <div>
                                        <h5 class="mb-0">Advanced Science</h5>
                                        <p class="mb-0 text-muted">Hands-on experiments and labs to foster critical thinking in science.</p>
                                    </div>
                                </li>
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-success"><i class="bi bi-code-slash"></i></span>
                                    <div>
                                        <h5 class="mb-0">Computer Science</h5>
                                        <p class="mb-0 text-muted">Introduction to coding, digital literacy, and responsible technology use.</p>
                                    </div>
                                </li>
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-warning"><i class="bi bi-basketball"></i></span>
                                    <div>
                                        <h5 class="mb-0">Physical Education</h5>
                                        <p class="mb-0 text-muted">Sports, fitness, and teamwork activities for physical and social growth.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- High School --> */}
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-8">
                            <h3 class="fw-bold text-secondary">High School Program (Grades 9-12)</h3>
                            <p class="mb-3">Our high school program prepares students for college and careers through a rigorous academic curriculum and specialized electives.</p>
                            <ul class="list-group">
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-primary"><i class="bi bi-calculator"></i></span>
                                    <div>
                                        <h5 class="mb-0">Advanced Mathematics</h5>
                                        <p class="mb-0 text-muted">Courses in Algebra, Calculus, and Statistics that lay a strong foundation.</p>
                                    </div>
                                </li>
                                <li class={`list-group-item d-flex align-items-center ${this.props.mode==='light'?'bg-light-list':'bg-dark-list'}`}>
                                    <span class="me-3 text-danger"><i class="bi bi-flask"></i></span>
                                    <div>
                                        <h5 class="mb-0">Laboratory Sciences</h5>
                                        <p class="mb-0 text-muted">Physics, Chemistry, and Biology with lab work to reinforce scientific concepts.</p>
                                    </div>
                                </li>
                                {/* <li class="list-group-item d-flex align-items-center">
                                    <span class="me-3 text-info"><i class="bi bi-translate"></i></span>
                                    <div>
                                        <h5 class="mb-0">Special Languages</h5>
                                        <p class="mb-0 text-muted">Offering Spanish, French, and Mandarin to enhance global communication skills.</p>
                                    </div>
                                </li> */}
                                {/* <li class="list-group-item d-flex align-items-center">
                                    <span class="me-3 text-success"><i class="bi bi-briefcase"></i></span>
                                    <div>
                                        <h5 class="mb-0">Career Counseling</h5>
                                        <p class="mb-0 text-muted">Guidance to help students explore career options and prepare for college.</p>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
