import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expend-md navbar-dark bg-dark">
            <div>
              <a
                href="http://localhost:3000/employees"
                className="navbar-brand"
              >
                Employee Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
