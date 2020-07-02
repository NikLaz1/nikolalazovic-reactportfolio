import React from 'react';
// import logo from './logo.svg';
import './HomePage.css';
import Header from './Header';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="App d-flex flex-column">
      <Header/>
      <div class="container flex-grow-1">
        <div class="row justify-content-center">
          <div class="col-auto">
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG7iVWnHpXqkQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=RP_TeBP0Bv9XpuuSt3iY_WoIBQIdUlNXg3yhDKU5jrw" class="img" alt="Responsive image"/>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12">
           <div class="media">
            <img class="mr-3" src="https://www.ryerson.ca/content/dam/trsm-marketing-resources/images/branding/170504_TRSM_Branding_header.jpg" alt="Ted Rogers School" height="150" width="200"/>
            <div class="media-body">
             <h5 class="mt-0">Introduction & Background</h5>
              Hello all! 
              My name is Nikola and welcome to my portfolio! I'm a full stack developer in training. 
              I wasn't interested in development for a good portion of my life. In fact I graduated with a Bachelor of 
              Commerce, majoring in marketing and management. Ted Rogers School of Business Management. Many a tear shed here, 
              many an accomplishment acheived. This is where I built my foundation and this is where I draw from for business savvy-ness.
            </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
        <div class="col-12">
          <div class="media">
            <div class="media-body">
              <h5 class="mt-0 mb-1">Work History</h5>
               During my studies I worked in business development 
              for a small company based in Oakville, Ontario. 
              I worked in the finance sectore after graduating, but never truly enjoyed it. So i decided to make a leap
              of faith, and sign up to a course at UOFT to expand my coding knowledge and create new opportunities for
              myself. 
            </div>
            <img class="ml-3" src="https://cdn.cnn.com/cnnnext/dam/assets/191218130757-dubai-diamonds-rotunda-super-169.jpg" alt="bank" height="150" width="200"/>
          </div>
        </div>
        </div>
      
        <div class="row justify-content-center">
          <div class="col-12">
          <div class="media">
            <img class="mr-3" src="https://sloanreview.mit.edu/content/uploads/2016/08/FR-TS-Tech-Industry-1200.jpg" alt="Tech" height="150" width="200"/>
            <div class="media-body">
            <h5 class="mt-0">Future</h5>
              Now that the course is well under way, i'm beginning to get a better grasp of how things work and 
              all of the intricacies that come along with the territory. Full Stack development is completely new to me 
              but i'm now approaching it with a ferver to learn. 
              That being said. By the end of the course, I plan on having my skills honed enough to enter the work force.
            </div>
            </div>
          </div>
        </div>
      </div>      
      <Footer/>
    </div>
  );
}

export default HomePage;
