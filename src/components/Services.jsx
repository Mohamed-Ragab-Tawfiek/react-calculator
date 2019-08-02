import React from "react";
import styles from "./Services.css";

export const Services = props => (
  /*section of information*/
  <main role="main" class="container">
    <div class="row mt-5">
      <div class="text-center mt-5 pt-5 ">
        <div class="col-xs-12">
          <h1>Pricing</h1>
          <p class="text-center">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div class="card bg-light mb-3">
            <div class="card-header text-center h3">Free</div>
            <div class="card-body text-center">
              <h4 class="card-title">
                $0 / <small>mo</small>
              </h4>
              <p class="card-text">
                <ul>
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
              </p>
              <button class="btn btn-default custmbtn btn-block">
                Sign UP For Free
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div class="card bg-light mb-3">
            <div class="card-header text-center h3">Pro</div>
            <div class="card-body text-center">
              <h4 class="card-title">
                $15 / <small>mo</small>
              </h4>
              <p class="card-text">
                <ul>
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
              </p>
              <button class="btn btn-primary btn-block">Get Started</button>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-sm-12 col-xs-12">
          <div class="card bg-light mb-3">
            <div class="card-header text-center h3">Enterprise</div>
            <div class="card-body text-center">
              <h4 class="card-title">
                $29 / <small>mo</small>
              </h4>
              <p class="card-text">
                <ul>
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
              </p>
              <button class="btn btn-primary btn-block">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main> /* /.container */
);
