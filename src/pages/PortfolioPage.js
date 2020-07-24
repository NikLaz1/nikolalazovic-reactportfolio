import React from 'react';
// import logo from './logo.svg';
import './PortfolioPage.css';
import Header from './Header';
import Footer from './Footer';

function PortfolioPage() {
  return (
    <div className="App d-flex flex-column">
      <Header/>
      <div class="container flex-grow-1">
        <div class="row justify-content-center">
          <h3 class="portfolioHeader">
            Portfolio
          </h3>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src="/images/Project1Screenshot.png" alt="Project1Screenshot" width="288px" height="127px"/>
              <div class="card-body">
                <h5 class="card-title">Novel Corona-Virus Tracker LIVE</h5>
                <p class="card-text">A Basic tool to track the Status of the Corona Virus Live</p>
                <a href="https://niklaz1.github.io/Project1/" class="btn btn-primary">Check it out!</a>
                <a href="https://github.com/NikLaz1/Project1" class="btn btn-primary">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src="/images/Assignment17.png" alt="Assignment17Screenshot" width="288px" height="127px"/>
              <div class="card-body">
                <h5 class="card-title">Fitness Tracker</h5>
                <p class="card-text">Keep your workouts up to date!</p>
                <a href="https://nikolalazovicassignment17.herokuapp.com/" class="btn btn-primary">Check it out!</a>
                <a href="https://github.com/NikLaz1/NikolaLazovicAssignment17" class="btn btn-primary">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src="/images/App.png" alt="to.getherScreenshot"  width="288px" height="127px"/>
              <div class="card-body">
                <h5 class="card-title">Pick-up Sports App</h5>
                <p class="card-text">Helps you schedule sports evenets using municipal and private venues!</p>
                <a href="https://finalwave.herokuapp.com/" class="btn btn-primary">Check it out!</a>
                <a href="https://github.com/rodrigomgimenes/uoftgroupprojectfinal.github.io" class="btn btn-primary">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src="/images/Assignment18.png" alt="Assignment18Screenshot" width="288px" height="127px"/>
              <div class="card-body">
                <h5 class="card-title">Budget Tracker</h5>
                <p class="card-text">Keep track of your financials when travelling, both on and offline!</p>
                <a href="https://nikolalazovicassignment18.herokuapp.com/" class="btn btn-primary">Check it out!</a>
                <a href="https://github.com/NikLaz1/NikolaLazovicAssignment18" class="btn btn-primary">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src="/images/Assignment14.png" alt="Project1Screenshot" width="288px" height="127px"/>
              <div class="card-body">
                <h5 class="card-title">Reverse Engineering Code</h5>
                <p class="card-text">A very useful Tool!</p>
                {/* <!-- <a href="https://nikolalazovicassignment13.herokuapp.com/" class="btn btn-primary">Check it out!</a> --> */}
                <a href="https://github.com/NikLaz1/NikolaLazovicAssignment14" class="btn btn-primary">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{width: "18rem;"}}>
              <img class="card-img-top" src="/images/Project2.png" alt="Project2Screenshot"  width="288px" height="127px"/>
              <div class="card-body">
                <h5 class="card-title">Pharma App</h5>
                <p class="card-text">Order your Perscription medication!</p>
                <a href="https://cryptic-hollows-33962.herokuapp.com/" class="btn btn-primary">Check it out!</a>
                <a href="https://github.com/dasloinc/project-2" class="btn btn-primary">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div> 
      </div>     
      <Footer/>
    </div>
  );
}

export default PortfolioPage;
