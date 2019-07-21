import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const messages = [
  ["Initial contact", "2", "Are you authorized to work in the U.S.?"],
  ["Test", "3", "The next stage is to take our interview test. Please select a time"],
  ["Schedule in person", "1", "Please select a time to come in in-person"],
  ["Rejection", "5", "Unfortunatately the team decided not to proceed with your candidacy at this time."]
]

const Messages = () => {
  const [selection, setSelection] = useState(0);

  const selectedResponse = messages[selection][2];

  return (
    <Layout>
      <SEO title="Messages" />
      <h1>Received</h1>
      <p>
        <textarea value={'Hi, i would like to work for you. I\'m in the UK.'} />
      </p>
      <h1>Response</h1>
      <p>
        <textarea key="response" value={selectedResponse} />
      </p>
      <select onChange={(e) => setSelection(+e.target.value)} value={selection}>
        {
          messages.map(
            (message, index) => 
              <>
                <option value={index} key={index}>
                  {message[0]} v{message[1]}
                </option>
              </>
          )
        }
      </select>
    </Layout>
  )
}

export default Messages;
