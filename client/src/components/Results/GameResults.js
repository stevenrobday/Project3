//wrapper for all search results

import React from "react";
import { Columns, Column, Box, Section } from "../Layout";
import { GameResult } from "./";

export const GameResults = props => (
  <div>
    {props.results.map(result => {
      return (
        <Section key={result.gameID}>
          <Columns>
            <Column size="is-8" offset="is-offset-2">
              <Box>
                <GameResult
                  result={result}
                />
              </Box>
            </Column>
          </Columns>
        </Section>
      );
    })}
  </div>
);