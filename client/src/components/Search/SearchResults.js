import React from "react";
import { Box, Section } from "../Layout";
import Accordion from "../Accordion";

export const SearchResults = props => (
  <Section>
    <Box>
      <h1 className="title">Search Results</h1>
      {props.results.map(result => {
        return (
          <Accordion
            key={result.id}
            headline={result.headline}
            date={result.date}
            snippet={result.snippet}
            link={result.link}
          />
        );
      })}
    </Box>
  </Section>
);