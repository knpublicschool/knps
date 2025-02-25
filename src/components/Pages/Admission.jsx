import React, { Component } from 'react'

export default class Admission extends Component {
  render() {
    return (
      <>
      <div className='container my-3'>
        <section>
          <h2 className='text-success'>Addmission Information</h2>
          <p className='bg-light rounded p-2'>Admissions to classes from Nursery to Class - IX open normally in the month of Jan. of the preceding session. For admissions in class 2 and above, students have to submit a valid school leaving/transfer certificate from the previous school which must be duly recognized. Applying for registration/admission does not imply admission, which is subject to observation-cum interaction / written test and the availability of seats.</p>
        </section>
        <section class="document-section">
          <h2 class="h4 text-secondary mb-3">Overview</h2>
          <p class="lead">K N Public School offers admissions for classes Nursery through IX, ensuring a comprehensive evaluation of each student's potential.</p>
        </section>

        <section class="document-section">
          <h2 class="h4 text-secondary mb-3">Key Admission Details</h2>

          <div class="card mb-3">
            <div class="card-header bg-primary text-white">Admission Periods</div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Admissions open in January for the upcoming academic session</li>
                <li class="list-group-item">Academic session runs from April to March</li>
              </ul>
            </div>
          </div>

          <div class="card mb-3">
            <div class="card-header bg-primary text-white">Age Eligibility</div>
            <div class="card-body">
              <p>Our age criteria follow the New Education Policy 2020:</p>
              <div class="table-responsive">
                <table class="table table-bordered table-striped">
                  <thead class="table-light">
                    <tr>
                      <th>Class</th>
                      <th>Minimum Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Nursery</td><td>4 Years</td></tr>
                    <tr><td>KG I</td><td>5 Years</td></tr>
                    <tr><td>KG II</td><td>6 Years</td></tr>
                    <tr><td>Class I</td><td>7 Years</td></tr>
                    <tr><td>Class II</td><td>8 Years</td></tr>
                    <tr><td>Class III</td><td>9 Years</td></tr>
                    <tr><td>Class IV</td><td>10 Years</td></tr>
                    <tr><td>Class V</td><td>11 Years</td></tr>
                    <tr><td>Class VI</td><td>12 Years</td></tr>
                    <tr><td>Class VII</td><td>13 Years</td></tr>
                    <tr><td>Class VIII</td><td>14 Years</td></tr>
                    <tr><td>Class IX</td><td>15 Years</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="document-section">
          <h2 class="h4 text-secondary mb-3">Admission Process by Class Level</h2>

          <div class="accordion" id="admissionProcessAccordion">
            <div class="accordion-item">
              <h3 class="accordion-header" id="nurseryHeader">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nurseryDetails">
                  Nursery, KG I, and KG II
                </button>
              </h3>
              <div id="nurseryDetails" class="accordion-collapse collapse show" aria-labelledby="nurseryHeader">
                <div class="accordion-body">
                  <ul class="list-group">
                    <li class="list-group-item">Admission granted through observation-cum-interaction</li>
                    <li class="list-group-item"><strong>Mandatory</strong>: Presence of both parents during interaction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h3 class="accordion-header" id="primaryHeader">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#primaryDetails">
                  Class I to IX
                </button>
              </h3>
              <div id="primaryDetails" class="accordion-collapse collapse" aria-labelledby="primaryHeader">
                <div class="accordion-body">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Written test conducted in:
                      <ul>
                        <li>English Language</li>
                        <li>Mathematics</li>
                        <li>General Awareness</li>
                      </ul>
                    </li>
                    <li class="list-group-item">
                      Evaluation focuses on:
                      <ul>
                        <li>Linguistic proficiency</li>
                        <li>Mathematical ability</li>
                        <li>General knowledge</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="document-section">
          <h2 class="h4 text-secondary mb-3">Required Documents</h2>
          <div class="card">
            <ul class="list-group list-group-numbered">
              <li class="list-group-item">Completed Registration Form</li>
              <li class="list-group-item">Birth Certificate (Form 5 or 9)</li>
              <li class="list-group-item">Previous class Report Card</li>
              <li class="list-group-item">Transfer Certificate</li>
              <li class="list-group-item">Character Certificate</li>
              <li class="list-group-item">Caste Certificate (if applicable)</li>
            </ul>
          </div>
        </section>

        <section class="note-section mb-4 p-3">
          <h3 class="h5 text-danger">Important Notes</h3>
          <ul class="list-unstyled">
            <li>• Incomplete forms will not be accepted</li>
            <li>• Parents must fill forms personally</li>
            <li>• Admissions are provisional</li>
            <li>• False information may cancel admission</li>
          </ul>
        </section>

      <section>
        <h3 className='text-success'>Working Hours Of The School Office</h3>
        <p className='bg-light rounded p-2'>The School Office will remain open from 9:00 a.m. to 3:00 p.m. on all working days. The office will remain closed on Sundays and Public Holidays.
        The Principal can be met between 10.00 a.m. to 12 noon on all working days, with prior appointment only.</p>
      </section>

      </div >

      </>
    )
  }
}
