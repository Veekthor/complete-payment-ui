import Cleave from "cleave.js/react";
import { useState } from "react";
import { ReactComponent as CheckIcon} from './assets/icons/check2.svg';

const App = () => {
  const [stage, setStage] = useState(1);
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
    expiryDate: "",
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

  const handleBtn = (e) => {
    setStage((prev) => prev + 1);
  };

  const handleCancel = (e) => {
    setValues((prev) => {
      Object.keys(prev).forEach((v) => {
        prev[v] = "";
      });
      return prev;
    });
    setStage(1);
  };
  return (
    <div className="App">
      <main>
        <article>
          <div className="container">
            {stage < 4 && <div className="form-header">
              <h2 className="color-blue-100">Complete your Purchase</h2>
              <nav className={`stage-${stage}`}>
                <span className={`${stage === 1 ? "active" : ""}`}>Personal Info</span>
                <span className={`text-center ${stage === 2 ? "active" : ""}`}>Billing Info</span>
                <span className={`text-center ${stage === 3 ? "active" : ""}`}>Complete Payment</span>
              </nav>
            </div>}
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
                <label className="required" htmlFor="customerEmail">Email Address</label>

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
                <div className="LGA-col">
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
                <div className="col state-col">
                  <div className="form-group">
                    <label htmlFor="location">State</label>
                    <div className="select-wrapper">
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
            </div>

            <div className={`section2 ${stage !== 2 ? "d-none" : ""}`}>
              <div className="form-group">
                <label className="required" htmlFor="cardName">Name on Card</label>
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
                <label className="required" htmlFor="cardType">Card Type</label>
                <div className="select-wrapper">
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
              </div>

              <div className="form-row card-details-row">
                <div className="card-num-col">
                  <div className="form-group">
                    <label className="required" htmlFor="cardNumber">Card number</label>
                    <Cleave
                      options={{ creditCard: true }}
                      value={values.cardNumber}
                      name="cardNumber"
                      onChange={handleChange}
                      className="form-control"
                      id="cardNumber"
                    />
                  </div>
                </div>
                <div className="card-exp-col">
                  <div className="form-group">
                    <label className="required" htmlFor="expiryDate">Expiry date</label>
                    <Cleave
                      name="expiryDate"
                      className="form-control"
                      placeholder="MM/YY"
                      id="expiryDate"
                      value={values.expiryDate}
                      onChange={handleChange}
                      options={{ date: true, datePattern: ["m", "y"] }}
                    />
                  </div>
                </div>
                <div className="card-cvv-col">
                  <div className="form-group">
                    <label className="required" htmlFor="cvv">CVV</label>
                    <input
                      type="tel"
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
              <div className="confirm-payment-container">
                <div className="heading row">
                  <div className="text-left col">
                    Item Name
                  </div>
                  <div className="text-right col">&#8358; Price</div>
                </div>
                <div className="items-body">
                  <div className="item-1 row">
                    <div className="text-left col color-blue-100">Data science and usability</div>
                    <div className="text-right col color-blue-100">50,000.00</div>
                  </div>
                  <div className="item-2 row">
                    <div className="text-left col color-blue-100">Shipping</div>
                    <div className="text-right col">0.00</div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="total">
                  <div className="total-inner row">
                    <div className="text-left col">Total</div>
                    <div className="text-right col color-blue-100">50,000</div>
                  </div>
                </div>
              </div>
            </div>


            <div className={`section4 ${stage !== 4 ? "d-none" : ""}`}>
              <div className="payment-complete-container">
                <div className="inner-container">
                  <p className="check-icon"><CheckIcon /></p>
                  <h1 className="color-blue-100">Purchase Completed</h1>
                  <p>Please check your email for details concerning this transaction.</p>
                  <p>
                    <button onClick={handleCancel}>Return Home</button>
                  </p>
                </div>
                
              </div>
            </div>
            {stage < 4 && <div className="btn-container">
              <button type="button" className="pay-btn" onClick={handleBtn}>
                {stage === 3 ? "Pay" : "Next"}
              </button>
              <button type="button" className="cancel-btn color-blue-100" onClick={handleCancel}>
                Cancel Payment
              </button>
            </div>}
          </div>
        </article>
      </main>
    </div>
  );
};

export default App;
