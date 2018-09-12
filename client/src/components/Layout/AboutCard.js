import React from "react";
import { Columns, Column, Section } from "../Layout";

export const AboutCard = props => (
    <Section>
        <Columns>
            <Column size="is-12">
                <div className="container">
                    <div className="container has-background-white-ter">
                        <div className="columns">
                            <div className="card column is-half is-offset-one-quarter has-background-info">
                                <div className="card-image">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4 has-text-centered has-text-white">GameSplice</p>
                                        </div>
                                    </div>
                                    <Section>
                                        <Columns>
                                            <Column size="is-6" offset="is-offset-3">
                                                <figure className="image">
                                                    <img src={require('./img/GSLogo2.png')} alt="GameSplice Logo" />
                                                </figure>
                                            </Column>
                                        </Columns>
                                    </Section>
                                </div>
                                <div className="card-content">
                                    <div className="content has-text-centered has-text-white">
                                        Welcome to GameSplice! Look up any game and we will provide you information on games made in the past and ones to come in the future.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Column>
        </Columns>
    </Section>
);