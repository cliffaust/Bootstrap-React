import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Products extends Component {
  render() {
    return (
      <div className="main-product-container">
        <Container>
          <Row>
            <Col md={3}>
              <div className="card">
                <div className="card__percent">20%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_1.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Advent Laptop Bags</h1>
                  <p className="card__text--paragraph">1 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$200</span>
                    <span className="card__price-amount--new">$160</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="card__percent">20%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Leatherology Bi-Fold Wallet</h1>
                  <p className="card__text--paragraph">10 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$260</span>
                    <span className="card__price-amount--new">$150</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="card__percent">40%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_3.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Median Large - Tan Handbag</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$400</span>
                    <span className="card__price-amount--new">$1260</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="card__percent">10%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_4.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Victorine Wallet</h1>
                  <p className="card__text--paragraph">3 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$320</span>
                    <span className="card__price-amount--new">$260</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="card__percent">18%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_5.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">McJolts Matte Shoulder Bag</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$420</span>
                    <span className="card__price-amount--new">$410</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="card__percent">38%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_6.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Dune London Handbag</h1>
                  <p className="card__text--paragraph">24 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$720</span>
                    <span className="card__price-amount--new">$510</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="card">
                <div className="card__percent">19%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_7.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Groche Snoflake Wallet</h1>
                  <p className="card__text--paragraph">26 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1220</span>
                    <span className="card__price-amount--new">$1010</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="card">
                <div className="card__percent">19%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_8.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">St. Jacobs Shoulder Bag</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1520</span>
                    <span className="card__price-amount--new">$1310</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="card">
                <div className="card__percent">31%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_9.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Chevron Blue Laptop Bag</h1>
                  <p className="card__text--paragraph">12 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$2520</span>
                    <span className="card__price-amount--new">$2310</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="card">
                <div className="card__percent">11%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_10.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Dolce F Laptop Bag</h1>
                  <p className="card__text--paragraph">11 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$3520</span>
                    <span className="card__price-amount--new">$3310</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="card">
                <div className="card__percent">15%</div>
                <div className="card__image-container">
                  <img className="card__image" src="/image_11.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Advent Laptop Bag</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$500</span>
                    <span className="card__price-amount--new">$410</span>
                  </h3>

                  <div className="cart-btn">
                    <svg
                      class="bi bi-cart-fill"
                      width="2.4em"
                      height="2.4em"
                      viewBox="0 0 16 16"
                      fill="#84E296"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                    <span className="cart-btn__text">Cart</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products;
