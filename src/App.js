const App = () => {

  return (
    <div className="App">
      <main>
        <article>
          <div className="container">
            <div className="form-header">
              <h2>Complete your Purchase</h2>
              <div>
                <a href="#!">Personal Info</a>
                <a href="#!">Billing Info</a>
                <a href="#!">Complete Payment</a>
              </div>
            </div>
            <form>
              <div className="section1">
                <div className="form-group">
                  <label htmlFor="customerName">Name</label>
                  <input type="text" className="form-control" name="name" id="customerName"/>
                </div>
                <div className="form-group">
                  <label htmlFor="customerEmail">Email Address</label>

                  <small id="emailHelp" className="form-text text-muted">The purchase receipt would be sent to this address.</small>

                  <input type="email" className="form-control" id="customerEmail" name="email" aria-describedby="emailHelp"/>

                </div>
                <div className="form-group">
                  <label htmlFor="address1">Address 1</label>
                  <input type="text" name="address1" className="form-control" id="address1"/>
                </div>
                <div className="form-group">
                  <label htmlFor="address2">Address 2</label>
                  <input type="text" name="address2" className="form-control" id="address2"/>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="LGA">Local Government</label>
                      <input type="text" name="LGA" className="form-control" id="LGA"/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="location">State</label>
                      <select name="location" className="form-control" id="location">
                        <option>Abia</option>
                        <option>Lagos</option>
                        <option>Enugu</option>
                        <option>Kaduna</option>
                        <option>Ebonyi</option>
                      </select>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="section2">
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input type="text" className="form-control" name="cardName" id="cardName"/>
                </div>
                <div className="form-group">
                  <label htmlFor="cardType">Card Type</label>
                  <select className="form-control" id="cardType">
                    <option>Visa</option>
                    <option>MasterCard</option>
                    <option>Verve</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card details</label>
                      <input type="text" name="cardNumber" className="form-control" id="cardNumber"/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry date</label>
                      <input type="text" name="expiryDate" className="form-control" id="expiryDate"/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" name="cvv" className="form-control" id="cvv"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section3">
                <table>
                  <tr>
                    <th>Item Name</th>
                    <th>&#8356; Price</th>
                  </tr>

                  <tr>
                    <td>Data science and usability</td>
                    <td>50,000.00</td>
                  </tr>

                  <tr>
                    <td>Shipping</td>
                    <td>0.00</td>
                  </tr>

                  <tr>
                    <div></div>
                  </tr>

                  <tr>
                    <td>Total</td>
                    <td>50,000</td>
                  </tr>

                </table>
              </div>
              <div className="btn-container">
                <button>Next</button>
                <button>Cancel Payment</button>
              </div>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
