import React, {Component} from 'react';

export default class Education extends Component {
  render() {
    return(
      <section class="resume-section" id="education">
          <div class="resume-section-content">
              <h2 class="mb-5">Education</h2>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="flex-grow-1">
                      <h3 class="mb-0">K.L.S GOGTE INSTITUTE OF TECHNOLOGY </h3>
                      <div class="subheading mb-3">Bachelor of ENGINEERING</div>
                      <div>MECHANICAL ENGINEER</div>
                      <p>GPA: 7.0</p>
                  </div>
                  <div class="flex-shrink-0"><span class="text-primary">August2017 - August 2021</span></div>
              </div>
              <div class="d-flex flex-column flex-md-row justify-content-between">
                  <div class="flex-grow-1">
                      <h3 class="mb-0">K.L.E INDEPENDENT PU </h3>
                      <div class="subheading mb-3">PCM(CS)</div>
                      <p>%= 75</p>
                  </div>
                  <div class="flex-shrink-0"><span class="text-primary">june 2015 - april 2017</span></div>
              </div>
          </div>
            
      </section>
    );
  }
}
