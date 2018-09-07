import React from "react";
import { Box, Section } from "../Layout";
import { FormBtn, Input } from "../Form";

export const SearchForm = props => (
  <Section>
    <Box>
      <h1 className="title">Search Articles</h1>
      <form>
        <Input
          onChange={props.onChange}
          value={props.topicValue}
          label="Topic"
          icon={false}
          name="topic"
          placeholder="Topic"
          valid={props.validTopic}
          invalidText="Please enter a valid topic!"
        />
        <Input
          onChange={props.onChange}
          value={props.beginValue}
          label="Start Year"
          icon="fas fa-calendar"
          name="begin"
          placeholder="Example: 1851"
          valid={props.validBegin}
          invalidText="Please enter a valid start year!"
        />
        <Input
          onChange={props.onChange}
          value={props.endValue}
          label="End Year"
          icon="fas fa-calendar"
          name="end"
          placeholder="Example: 2018"
          valid={props.validEnd}
          invalidText="Please enter a valid end year!"
        />
        <FormBtn
          color="is-success"
          onClick={props.onClick}
        >
          SEARCH
        </FormBtn>
      </form>
    </Box>
  </Section>
);