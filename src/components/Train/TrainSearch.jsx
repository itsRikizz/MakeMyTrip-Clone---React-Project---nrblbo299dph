import React, { useEffect, useState } from "react";
import Train from "./Train";

const TrainSearch = () => {
  const [trains, setTrains] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [price, setPrice] = useState(null);
  const [trainOption, setTrainOption] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains`
        );
        const data = await response.json();
        setTrainOption(data);
        setTrains(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(trains);
    // Send the form data to your server or process it here
  };

  return (
    <>
      <div className='flight-search-section'>
        <div className='container  bg-light  rounded-3 px-5 '>
          <form onSubmit={handleSubmit} className='pb-5 pt-3'>
            <div className='row g-2'>
              <div className='col-md'>
                <div className='form-floating'>
                  <select
                    className='form-select'
                    id='floatingSelectGrid'
                    aria-label='Floating label select example'
                    defaultValue='1'
                  >
                    <option value='' disabled>
                      Select City
                    </option>
                    {trainOption.map((form, index) => (
                      <option key={index} value={form.from}>
                        {form.from}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>FROM</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <select
                    className='form-select'
                    id='floatingSelectGrid'
                    aria-label='Floating label select example'
                    defaultValue='2'
                  >
                    <option value='' disabled>
                      Select City
                    </option>
                    {trainOption.map((to, index) => (
                      <option key={index} value={to.to}>
                        {to.to}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>TO</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input type='date' className='form-control' />
                  <label htmlFor='floatingSelectGrid'>Travel Date</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input type='date' className='form-control' />
                  <label htmlFor='floatingSelectGrid'>Return Date</label>
                </div>
              </div>
            </div>
            <div className='container d-flex justify-content-center position-relative search-btn'>
              <button type='submit' className='btn btn-primary px-5'>
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
      <Train />
    </>
  );
};

export default TrainSearch;
