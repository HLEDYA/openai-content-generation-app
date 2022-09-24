import React from "react";
import QueryForm from "./QueryForm";

const Summarize = () => {
  return (
    <div>
      <QueryForm
        title="Summarize a Text"
        description="Enter the long text to be summarized."
        inputPlaceHolder="text goes here"
        note=""
        apiRoute="summarize"
      />
    </div>
  );
};

export default Summarize;
