import React, { Component } from "react";
import { Columns, Column } from "../Layout";
import Accordion from "../Accordion";

export class GameResult extends Component {
  render() {
    return (
      <div>
        <Columns>
          <Column size="is-2" offset="">
            <img src={this.props.result.coverImage} alt={this.props.result.name} />
          </Column>
          <Column size="is-7" offset="">
            <div className="is-size-5">
              <strong>
                {this.props.result.name}
              </strong>
            </div>
            <div>
              <strong>Released:</strong> {this.props.result.release}
            </div>
            <div>
              <strong>Platforms:</strong>&nbsp;
              {this.props.result.platforms.map(platform => {
                return (
                  <span key={platform.name}>
                    <a href={platform.href} target="_blank">
                      {platform.name}
                    </a>
                    &nbsp;
                  </span>
                );
              })}
            </div>
            <div>
              <strong>Description:</strong> {this.props.result.description}
            </div>
            <div>
              <a href={this.props.result.wiki} target="_blank">Visit wiki page!</a>
            </div>
          </Column>
        </Columns>
        <Accordion title="Images">
          <Columns addClass="is-multiline">
            {this.props.result.images.map(src => {
              return (
                <Column key={src} size="is-2" offset="">
                  <img src={src} alt="" />
                </Column>
              );
            })}
          </Columns>
        </Accordion>
      </div>
    );
  }
}