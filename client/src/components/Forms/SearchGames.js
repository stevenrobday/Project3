import React from "react";
import { FormBtn, Input } from "../FormComponents";

export const SearchGames = props => (
  <form>
    <div className="field is-grouped">
      <div className="control">
        <Input
          // onChange={props.onChange}
          //     value={props.topicValue}
          label={null}
          icon="fas fa-gamepad"
          name="game"
          type="text"
          placeholder="Search games here"
        />
      </div>
      <FormBtn color="is-success">
        SEARCH
      </FormBtn>
    </div>
  </form>
);