import React from 'react';
// import logo from './logo.svg';
import './Footer.css';

function Footer() {
  return (
      <footer class="mainfooter" role="contentinfo">
                <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div class="footer-pad">
                <h4>Future Projects</h4>
                <ul class="list-unstyled">
                  <li><a href="#"></a></li>
                  <li><a href="#">Virtual Machines</a></li>
                  <li><a href="#">Proxy Provider</a></li>
                  <li><a href="#">Load Testing</a></li>
                  <li><a href="#">Functional Testing</a></li>
                  {/* <!-- <li><a href="#">App Launcher</a></li> --> */}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div class="footer-pad">
                <h4>Starting off</h4>
                <ul class="list-unstyled">
                  {/* <!-- <li><a href="#">Website Tutorial</a></li> --> */}
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">FAQs</a></li>
                  {/* <!-- <li><a href="#">Webmaster</a></li> --> */}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div class="footer-pad">
                <h4>Collaborative Work</h4>
                <ul class="list-unstyled">
                  {/* <!-- <li><a href="#">Forex</a></li>
                  <li><a href="#">Algorithmic Trading</a></li>
                  <li><a href="#">Humanitarian Work</a></li> --> */}
                  <li><a href="#">Refactoring</a></li>
                  <li><a href="#">Webpage Creation</a></li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4>Follow Me</h4>
                  <ul class="social-network social-circle">
                    <li><a href="https://www.linkedin.com/in/nikolalazovic/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/NikLaz1" class="icoGithub" title="Github"><i class="fa fa-github"></i></a></li>
                  </ul>				
          </div>
          </div>
        <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">&copy; Copyright 2020 - Nikola Lazovic.  All rights reserved.</p>
          </div>
        </div>
      
      
        </div>
      </div>
      </footer>
  );
}

export default Footer;
