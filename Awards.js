import React, {Component} from 'react';

export default class Awards extends Component {
  render() {
    return(
      <section class="resume-section" id="awards">
          <div class="resume-section-content">
              <h2 class="mb-5"> Certifications</h2>
              <ul class="fa-ul mb-0">
                  <li>
                      <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                      Complete React JS webdevelper with ES6
                  </li>
                  <li>
                      <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        Electric Vehicles and Mobility (course certificate issued by coursera)
                  </li>
                  <li>
                      <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                      Cambridge English Entry Level Certificate in ESOL international (Entry 2)

                  </li>

              </ul>
          </div>
      </section>
    );
  }
}
