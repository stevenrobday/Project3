import React from "react";

export const AboutCard = props => (
    <div className="container">
        <div className="columns">
            <div className="card column is-half is-offset-one-quarter">
                <div className="card-image">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 has-text-centered has-text-info">GameSplice</p>
                        </div>
                    </div>
                    <figure className="image is-4by3">
                        <img src={require('./img/GSLogo.PNG')} alt="GameSplice Logo"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content has-text-centered has-text-info">
                        Welcome to GameSplice. Look up any game and we will provide you information and a place to post your thoughts.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );