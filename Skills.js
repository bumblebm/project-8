import React, {Component} from 'react';

export default  class Skills extends Component {
  render() {
    return(
      <section class="resume-section" id="skills">
          <div class="resume-section-content">
              <h2 class="mb-5">Skills</h2>
              <div class="subheading mb-3">Programming Languages & Tools</div>
              <ul class="list-inline dev-icons">
                  <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                  <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                  <li class="list-inline-item"><i class="fab fa-react"></i></li>
                  <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                  <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                  <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>

              </ul>
              <div class="subheading mb-3">MECHANICAL RELATED </div>
              <ul class="fa-ul mb-0">
                  <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      Mechanical ansys
                  </li>
                  <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      Catia
                  </li>
                  <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      AutoCad
                  </li>

              </ul>
          </div>
      </section>
    );
  }
}
