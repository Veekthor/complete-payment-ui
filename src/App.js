import { useState } from "react";

const App = () => {
  const [stage, setStage] = useState(0);
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    address2: "",
    LGA: "",
    location: "",
    cardName: "",
    cardType: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  // handle input change event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBtn = e => {
    setStage(prev => (prev + 1));
  };

  const handleCancel = e => {
    setValues(prev => {
      Object.keys(prev).forEach(v => {
        prev[v] = ""
      })
      return prev;
    });
    setStage(0);
  };
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
              <div className={`section1 ${stage !== 1 ? "d-none" : ""}`}>
                <div className="form-group">
                  <label htmlFor="customerName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="customerName"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customerEmail">Email Address</label>

                  <small id="emailHelp" className="form-text text-muted">
                    The purchase receipt would be sent to this address.
                  </small>

                  <input
                    type="email"
                    className="form-control"
                    id="customerEmail"
                    name="email"
                    aria-describedby="emailHelp"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address 1</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address2">Address 2</label>
                  <input
                    type="text"
                    name="address2"
                    className="form-control"
                    id="address2"
                    value={values.address2}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="LGA">Local Government</label>
                      <input
                        type="text"
                        name="LGA"
                        className="form-control"
                        id="LGA"
                        value={values.LGA}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="location">State</label>
                      <select
                        name="location"
                        className="form-control"
                        id="location"
                        value={values.location}
                        onChange={handleChange}
                      >
                        <option className="d-none" value="">
                          Select State
                        </option>
                        <option value="Abia">Abia</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Ebonyi">Ebonyi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`section2 ${stage !== 2 ? "d-none" : ""}`}>
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cardName"
                    id="cardName"
                    value={values.cardName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardType">Card Type</label>
                  <select
                    className="form-control"
                    onChange={handleChange}
                    value={values.cardType}
                    id="cardType"
                  >
                    <option className="d-none" value="">
                      Select Type
                    </option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Verve">Verve</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card details</label>
                      <input
                        type="text"
                        name="cardNumber"
                        className="form-control"
                        id="cardNumber"
                        value={values.cardNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="expiryMonth">Expiry date</label>
                      <div className="expiry-container">
                        <input
                          type="text"
                          name="expiryMonth"
                          className="form-control"
                          id="expiryMonth"
                          value={values.expiryMonth}
                          placeholder="MM"
                          onChange={handleChange}
                        />
                        <span>/</span>
                        <input
                          type="text"
                          name="expiryYear"
                          className="form-control"
                          id="expiryYear"
                          value={values.expiryYear}
                          placeholder="YY"
                          onChange={handleChange}
                        />
                      </div>
                      
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        className="form-control"
                        id="cvv"
                        value={values.cvv}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`section3 ${stage !== 3 ? "d-none" : ""}`}>
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
                <button type="button" onClick={handleBtn}>{stage === 3 ? "Pay" : "Next"}</button>
                <button type="button" onClick={handleCancel}>Cancel Payment</button>
              </div>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
};

export default App;
