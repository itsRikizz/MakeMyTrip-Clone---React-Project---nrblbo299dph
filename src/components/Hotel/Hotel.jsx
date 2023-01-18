import React from "react";
import "./hotel.css";

const Hotel = () => {
  return (
    <div className='search-result-section bg-light'>
      <div className='search-head pt-2 pb-3'>
        <div className='container'></div>
      </div>
      <div id='forms' className='container search-body bg-light'>
        <div className='accordion-item search-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='false'
              aria-controls='collapseOne'
            >
              <div className='row' style={{ width: "100%" }}>
                <div className='col-lg-2 .d-none .d-sm-block'></div>
                <div className='col-lg-2 col-sm-3'>
                  <div className='airline d-flex'>
                    <img
                      src='https://media.glassdoor.com/sqll/2006190/indigo-airlines-squarelogo-1585307627941.png'
                      alt='log'
                      width='40'
                      height='40'
                    />
                    <div className='flex-column' style={{ marginLeft: "1rem" }}>
                      <p>Indigo</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                  <div className='departure-time'>
                    <h5>20:45</h5>
                    <p>Bengaluru</p>
                  </div>
                </div>
                <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                  <div className='duration'>
                    <p>01 hr 20 mins</p>
                    <hr />
                    <p>Non-stop </p>
                  </div>
                </div>
                <div className='col-lg-2 col-sm-2 d-none d-sm-block'>
                  <div className='arrival-time'>
                    <h5>22:10</h5>
                    <p>Bengaluru</p>
                  </div>
                </div>
                <div className='col-lg-2 d-none'></div>
              </div>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='headingOne'
            // data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <div className='container'>
                <div className='row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none text-center'>
                  <div className='col-4'>
                    <h5>20:45</h5>
                    <p>Bengaluru</p>
                  </div>
                  <div className='col-3'>
                    <img
                      src='1.jpg'
                      alt='Arrow'
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    ></img>
                  </div>
                  <div className='col-5'>
                    <div className='arrival-time'>
                      <h5>22:10</h5>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                </div>
                <div className='row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none'>
                  <div className='col-12 text-center'>
                    <div className='duration'>
                      <p>01 hr 20 mins</p>
                      <hr />
                      <p>Non-stop </p>
                    </div>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className='col-lg-12'>
                    <div className='row'></div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='accordion-item search-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              <div className='row' style={{ width: "100%" }}>
                <div className='col-lg-2 .d-none .d-sm-block'></div>
                <div className='col-lg-2 col-sm-3'>
                  <div className='airline d-flex'>
                    <img
                      src='https://media.glassdoor.com/sqll/2006190/indigo-airlines-squarelogo-1585307627941.png'
                      alt='log'
                      width='40'
                      height='40'
                    />
                    <div className='flex-column' style={{ marginLeft: "1rem" }}>
                      <p>Indigo</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                  <div className='departure-time'>
                    <h5>20:45</h5>
                    <p>Bengaluru</p>
                  </div>
                </div>
                <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                  <div className='duration'>
                    <p>01 hr 20 mins</p>
                    <hr />
                    <p>Non-stop </p>
                  </div>
                </div>
                <div className='col-lg-2 col-sm-2 d-none d-sm-block'>
                  <div className='arrival-time'>
                    <h5>22:10</h5>
                    <p>Bengaluru</p>
                  </div>
                </div>
                <div className='col-lg-2 d-none'></div>
              </div>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            // data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <div className='container'>
                <div className='row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none text-center'>
                  <div className='col-4'>
                    <h5>20:45</h5>
                    <p>Bengaluru</p>
                  </div>
                  <div className='col-3'>
                    <img
                      src='1.jpg'
                      alt='Arrow'
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    ></img>
                  </div>
                  <div className='col-5'>
                    <div className='arrival-time'>
                      <h5>22:10</h5>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                </div>
                <div className='row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none'>
                  <div className='col-12 text-center'>
                    <div className='duration'>
                      <p>01 hr 20 mins</p>
                      <hr />
                      <p>Non-stop </p>
                    </div>
                  </div>
                </div>

                <hr />
                <div className='row mt-4'>
                  <div className='col-lg-12'>
                    <div className='row'>
                      <div className='col-md-4 text-center pt-3'>
                        {/* <button className='btn btn-primary book-now'>
                              BOOK NOW
                            </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
