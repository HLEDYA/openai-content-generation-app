import React from "react";
import QueryForm from "./QueryForm";

const ColdEmails = () => {
  return (
    <div>
      <QueryForm
        title="Create a Cold E-mail"
        description="Which subject would you like to create the cold email for?"
        inputPlaceHolder="Enter the subject"
        note="Enter as much information as possible about the subject"
        apiRoute="cold-emails"
      />
    </div>
  );
};

export default ColdEmails;
