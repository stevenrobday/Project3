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
            {this.props.headline}
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
          <p><strong>Date: </strong>{this.props.date}</p>
          <p>{this.props.snippet}</p>
          <p><a href={this.props.link} target="_blank">Click here for NYT article</a></p>
        </div>
      </div>
    )
  }
}

export default Accordion;