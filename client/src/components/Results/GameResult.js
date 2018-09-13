import React, { Component } from "react";
import { Columns, Column } from "../Layout";
import { AddGame } from "../Forms";
import Accordion from "../Accordion";

export class GameResult extends Component {
  render() {
    return (
      <div>
        <Columns addClass="has-text-centered">
          <Column size="is-2" offset="has-text-left">
            <img src={this.props.result.coverImage} alt={this.props.result.name} />
          </Column>
          <Column size="is-8" offset="has-text-left">
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
          <Column size="is-2" offset="has-text-centered">
            {this.props.loggedIn && (
              <AddGame
                user={this.props.user}
                gameObj={{
                  title: this.props.result.name,
                  coverimage: this.props.result.coverImage,
                  giantbombid: this.props.result.gameID
                }}
              />
            )}
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