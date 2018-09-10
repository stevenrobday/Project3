import React, { Component } from "react";
import "./Accordion.css";

class Accordion extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div>
        <button
          className="button accordion is-info"
          onClick={this.handleClick}
        >
          <div>
            {this.props.title}
          </div>
          <div>
            <i
              className={`fas fa-chevron-right 
              ${this.state.active ? "active" : "inactive"} 
              `}></i>
          </div>
        </button>
        <div
          className={`panel 
          ${this.state.active ? "active" : "inactive"} 
          `}>
          <div className="accContent">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Accordion;