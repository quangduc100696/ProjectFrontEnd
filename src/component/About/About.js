import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function About(props) {
  return (
    <div>
        <Header />
      <main>
        {/* Hero Area Start*/}
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>About Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End*/}
        {/* About Details Start */}
        <div className="about-details section-padding30">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap mb-50">
                  <h4>Our Mission</h4>
                  <p>
                    Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                    udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                    gravida. Risus commodo viverra sebfd dho eiusmod tempor
                    maecenas accumsan lacus. Risus commodo viverra sebfd dho
                    eiusmod tempor maecenas accumsan lacus.
                  </p>
                  <p>
                    {" "}
                    Risus commodo viverra sebfd dho eiusmod tempor maecenas
                    accumsan lacus. Risus commodo viverra sebfd dho eiusmod
                    tempor maecenas accumsan.
                  </p>
                </div>
                <div className="about-details-cap mb-50">
                  <h4>Our Vision</h4>
                  <p>
                    Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                    udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                    gravida. Risus commodo viverra sebfd dho eiusmod tempor
                    maecenas accumsan lacus. Risus commodo viverra sebfd dho
                    eiusmod tempor maecenas accumsan lacus.
                  </p>
                  <p>
                    {" "}
                    Risus commodo viverra sebfd dho eiusmod tempor maecenas
                    accumsan lacus. Risus commodo viverra sebfd dho eiusmod
                    tempor maecenas accumsan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
