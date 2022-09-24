import React from "react";
import QueryForm from "./QueryForm";

const Tweets = () => {
  return (
    <div>
      <QueryForm
        title="Generate A Tweet"
        description="Which subject would you like to create a tweet for?"
        inputPlaceHolder="Enter the subject"
        note="You can enter more than one subject"
        apiRoute="tweet-ideas"
      />
    </div>
  );
};

export default Tweets;
