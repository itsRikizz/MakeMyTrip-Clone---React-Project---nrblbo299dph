import React from "react";
import "./checkout.css";

const CheckOut = (props) => {
  return (
    <div className='container'>
      <div className='window'>
        <div className='order-info'>
          <div className='order-info-content'>
            <h2>Order Summary</h2>
            <div className='line'></div>
            <table className='order-table'>
              <tbody>
                <tr>
                  <td>
                    <h3>Base Fare</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='price'>₹{props.price}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='line'></div>
            <table className='order-table'>
              <tbody>
                <tr>
                  <td>
                    <h3>Fee & Surcharges</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='price'>₹{props.price / 10}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='line'></div>
            <table className='order-table'>
              <tbody>
                <tr>
                  <td>
                    <td>
                      <h3>Total Amount</h3>
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='price'>
                      ₹{Number(props.price) + Number(props.price / 10)}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='line'></div>
            <div className='total'></div>
          </div>
        </div>
        <div className='credit-info'>
          <div className='credit-info-content'>
            <table className='half-input-table'>
              <tbody>
                <tr>
                  <td>Please select your card: </td>
                  <td>
                    <div className='dropdown' id='card-dropdown'>
                      <div className='dropdown-btn' id='current-card'>
                        Visa
                      </div>
                      <div className='dropdown-select'>
                        <ul>
                          <li>Master Card</li>
                          <li>American Express</li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <img
              src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png'
              height='80'
              className='credit-card-image'
              id='credit-card-image'
              alt='credit-card-logo'
            />
            Card Number
            <div className='input-div'>
              <input
                type='text'
                className='input'
                id='card-number'
                placeholder='credit-card'
              ></input>
              <img
                src='https://dl.dropboxusercontent.com/s/4k4g8i8e1zd1x0x/credit-card-front.png'
                className='card-image'
                id='card-image'
                alt='credit-card'
              />
            </div>
            Expiration Date
            <table className='half-input-table'>
              <tbody>
                <tr>
                  <td>
                    <div className='input-div'>
                      <input type='text' className='input' id='month'></input>
                    </div>
                  </td>
                  <td>
                    <div className='input-div'>
                      <input type='text' className='input' id='year'></input>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            CVV
            <div className='input-div'>
              <input type='text' className='input' id='cvv'></input>
              <img
                src='https://dl.dropboxusercontent.com/s/9l6mh0ctj5y6d8s/cvv-example.png'
                className='cvv-image'
                id='cvv-image'
                alt='cvv'
              />
            </div>
            <button className='button' id='place-order'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
