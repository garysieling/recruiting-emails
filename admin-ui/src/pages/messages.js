import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const messages = [
  ["Initial contact", "2", "Are you authorized to work in the U.S.?"],
  ["Test", "3", "The next stage is to take our interview test. Please select a time"],
  ["Schedule in person", "1", "Please select a time to come in in-person"],
  ["Rejection", "5", "Unfortunatately the team decided not to proceed with your candidacy at this time."]
]

const Messages = () => (
  <Layout>
    <SEO title="Messages" />
    <h1>List of Available Messages</h1>
    {
      messages.map(
        (message) => 
          <>
            <h2>{message[0]} v{message[1]}</h2>
            <a href="#">Edit</a>&nbsp;
            <a href="#">Versions</a>&nbsp;
            <a href="#">Version Stats</a>&nbsp;

            <p>
              {message[2]}
            </p>
          </>
      )
    }
  </Layout>
)

export default Messages;
