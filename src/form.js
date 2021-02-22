import React from "react";
// import "./App.css";

import { FormLayout, TextField } from "@shopify/polaris";

const securityQuestions = [
  "What is your mother's maiden name?",
  "What was the name of your first pet?",
  "What was the name of your first school?"
];

const onSubmit = (data) => console.log(data);

function UserProfileForm() {
  return (
    // <Form formId="user-profile" onSubmit={onSubmit}>
    //   <Field required>First Name</Field>
    //   <Field required>Last Name</Field>
    //   <Field required type="email">
    //     Email
    //   </Field>

    //   <Field required type="select" options={securityQuestions}>
    //     Security Question
    //   </Field>
    //   <Field required>Security Answer</Field>

    //   <Field type="textarea">Bio</Field>
    // </Form>
    
<FormLayout>
  <FormLayout.Group condensed>
    <TextField label="First Name" onChange={() => {}} />
    <TextField label="Last Name" onChange={() => {}} />
    <TextField label="Age" onChange={() => {}} />
    <TextField label="City" onChange={() => {}} />
  </FormLayout.Group>
</FormLayout>
  );
}

export default function Form() {
  return (
    <div className="App">
      {/* <UserProfileForm /> */}
      {UserProfileForm()}
    </div>
  );
}
