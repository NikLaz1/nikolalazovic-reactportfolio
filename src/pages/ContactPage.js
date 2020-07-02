import React from 'react';
// import logo from './logo.svg';
import './ContactPage.css';
import Header from './Header';
import Footer from './Footer';

function ContactPage() {
  return (
    <div className="App">
      <Header/>
      <div class="container flex-grow-1">
        <div class="row justify-content-center">
            <div class="col-md-auto">
                <h3 class="contactPageHeader">Contact Info and Social Media</h3>
            </div>
        </div>
    
        <div class="row">
            <div class="col">
                <div class="card cardHeight">
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-512.png" class="card-img-top feature-icon" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://twitter.com/?lang=en">Twitter</a></h5>
                        <p class="card-text">Come Hangout on Twitter!</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card cardHeight">
                    <img src="https://image.flaticon.com/icons/svg/25/25231.svg" class="card-img-top feature-icon" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://github.com/NikLaz1">GitHub</a></h5>
                        <p class="card-text">Keep up with my Projects and Repo's!</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card cardHeight">
                    <img src="https://image.flaticon.com/icons/svg/281/281769.svg" class="card-img-top feature-icon" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title"><a href="mailto:nikolalazovic@tissaro.com">Email</a></h5>
                        <p class="card-text">Connect with me on Gmail!</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card cardHeight">
                    <img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" class="card-img-top feature-icon" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://linkedin.com">LinkedIn</a></h5>
                        <p class="card-text">Let's get Professional!</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12">
  
          <div class="card-body contact text-center h-100 white-text">
  
            <h3 class="my-4 pb-2">Direct Contact information</h3>
            <ul class="list-unstyled ml-4">
              <li>
                <p><i class="fa fa-map-marker"></i> Toronto, Canada</p>
              </li>
              <li>
                <p><i class="fa fa-phone"></i> (647)-201-2874</p>
              </li>
              <li>
                <p><i class="fa fa-envelope"></i> nikolalazovic@tissaro.com</p>
              </li>
              <li>
                <p><i class="fa fa-book"></i><a href="Nikola Lazovic Developer Resume.pdf">Resume</a></p>
              </li>
            </ul>
          </div>
        </div> 
        </div>  
      <Footer/>
    </div>
  );
}

export default ContactPage;
