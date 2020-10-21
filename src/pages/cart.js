import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../components/CartItemCard";

export default class cart extends Component {
  render() {
    return (
      <div className="container">
        <Link className="title has-text-black" to="/">
          Home
        </Link>
        <h2 className="subtitle has-text-centered has-text-weight-semibold">
          My Cart
        </h2>

        <div className="columns is-multiline is-centered">
          <div className="column is-half">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
          <div className="column is-half">
            <div className="block">
            <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <strong>Total Items :</strong>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <strong>7</strong>
                  </div>
                </div>
              </div>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <strong>Total Price :</strong>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <strong>$ 15.99</strong>
                  </div>
                </div>
              </div>

                <button className="button is-warning">
                    Pay Now
                </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
