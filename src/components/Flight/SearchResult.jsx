import React, { useState, useEffect } from "react";
import "./SearchResult.css";

const SearchResult = ({ from, to, depart, arrival }) => {
  const [flights, setFlights] = useState([]);

  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let filterData = [...data];
        let newData = filterData.filter(
          (data) => data.from == from && data.to == to
        );
        console.log(data, "searchRes");
        console.log(from, to);
        setFlights(newData);
        console.log(newData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='search-result-section bg-light'>
      <div className='search-head pt-2 pb-3'>
        <div className='container'></div>
      </div>
      <div id='forms' className='container search-body bg-light'>
        {flights &&
          flights.map((data) => (
            <>
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
                          <div
                            className='flex-column'
                            style={{ marginLeft: "1rem" }}
                          >
                            <p>{data.airlineName}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                        <div className='departure-time'>
                          <h5>20:45</h5>
                          <p>{data.from}</p>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                        <div className='duration'>
                          <p>{data.duration}</p>
                          <hr />
                          <p>Non-stop </p>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-2 d-none d-sm-block'>
                        <div className='arrival-time'>
                          <h5>22:10</h5>
                          <p>{data.to}</p>
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
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Doloremque temporibus dolor incidunt, porro recusandae
                      eveniet exercitationem iste delectus odio non inventore
                      iure debitis perferendis voluptatem atque obcaecati omnis
                      nemo ipsam.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        <br />
      </div>
    </div>
  );
};

export default SearchResult;
