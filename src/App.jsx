import './App.css'
import React, { Component } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/Pages/About'
import Admission from './components/Pages/Admission'
// import Result from './components/Pages/Result'
import Teachers from './components/Pages/Teachers'
import Contact from './components/Pages/Contact'
import Students from './components/Pages/Students'
import Footer from './components/Footer/Footer'
import Whatsappbutton from './components/Utils/Whatsappbutton'
import AcademicPrograms from './components/Pages/AcademicPrograms'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AcademicResource from './components/Pages/Subpages/AcademicResource'
import Library from './components/Pages/Subpages/Library'
import Support from './components/Pages/Subpages/support'
import NotFound from './components/Notfound'
import Policies from './components/Pages/Subpages/Policies'
import GuidelineAndCounseling from './components/Pages/Subpages/GuidelinesAndCounseling'
import StudentAchievements from './components/Pages/Subpages/StudentAchievements'
import Event from './components/Pages/Subpages/Event'

export default class App extends Component {

  constructor(props) {
    super(props);
    // Initialize state for mode
    this.state = {
      mode: 'light' // Default mode
    };
  }

  // Method to toggle the mode
  toggleMode = () => {
    this.setState(prevState => {
      const newMode = prevState.mode === 'light' ? 'dark' : 'light';

      // Set the background color and document title based on the new mode
      document.body.style.backgroundColor = newMode === 'dark' ? '#352F44' : 'beige';
      // document.title = `KNPS - Home (${newMode.charAt(0).toUpperCase() + newMode.slice(1)})`;

      return { mode: newMode }; // Update state
    });
  };


  render() {
    return (
      <Router>
        <Whatsappbutton/>
        
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
        <Routes>
          <Route exact path="/" element={<Home mode={this.state.mode}/>}/>
          <Route exact path="/about" element={<About mode={this.state.mode} />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/results" element={<Result />} /> */}
          <Route exact path="/admission" element={<Admission />} />
          <Route exact path="/students" element={<Students />} />
          {/* Student route */}
          <Route exact path="/students/resource" element={<AcademicResource />} />
          <Route exact path="/students/library" element={<Library />} />
          <Route exact path="/students/guidelinesandcounseling" element={<GuidelineAndCounseling />} />
          <Route exact path="/students/achievements" element={<StudentAchievements/>} />
          <Route exact path="/students/support" element={<Support />} />
          <Route exact path="/students/events" element={<Event />} />
          <Route exact path="/students/policies" element={<Policies />} />


          <Route exact path="/teachers" element={<Teachers />} />
          <Route exact path="/about/academicprograms" element={<AcademicPrograms mode={this.state.mode}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer mode={this.state.mode}/>
      </Router>
    )
  }
}
