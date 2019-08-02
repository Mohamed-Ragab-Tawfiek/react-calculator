import React from "react";
import "./Header.css";

export const Header = props => (
  /*    nav  */
  <div className="row">
      <nav class="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            Company Name
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#services">
                  Enterprise
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#portfolio">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <button class="btn btn-default custmbtn mt-2">Sign UP</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
);
