import React from 'react';
import bckgnd1 from '../../assests/images/bckgnd1.jpg';
import bckgnd from '../../assests/images/bckgnd.jpg';
import NavBar from './NavBar';

const bckgndStyle = {
  backgroundImage: `url(${bckgnd})`,
};
const bckgnd1Style = {
  backgroundImage: `url(${bckgnd1})`,
};

const LandingPage = () => (
  <React.Fragment>
    <NavBar />
    <div className="row Home">
      <div className="col-12">
        <div className="section" style={bckgndStyle}>
          <div className="section-inner">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="jumbotron">
                    <h3>Speak your mind</h3>
                    <h4>Speak your heart</h4>
                    <h5>Your memories are safest with you</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" style={bckgnd1Style}>
          <div className="section-inner">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="jumbotron clear">
                    <h2>
                      Say it in a thousand words
                    </h2>
                    <h4>Say it in a few words</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default LandingPage;
