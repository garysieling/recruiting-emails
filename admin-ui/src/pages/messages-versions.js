import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const name = "Initial Contact";
const messages = [
  ["3", "Are you authorized to work in the U.S.?", "youuuu -> you", "5%", "5%"],
  ["2", "Are youuuu authorized to work in the U.S.?", "youuuuuu ->  youuuu", "0%", "0%"],
  ["1", "Are youuuuuu authorized to work in the U.S.?", "", "0%", ""]
]

const Messages = () => (
  <Layout>
    <SEO title="Messages" />
    <h1>Versions for Message</h1>
    {
      messages.map(
        (message) => 
          <>
            <h2>Version {message[1]}</h2>
            <p>
              {message[1]}
            </p>
            <h3>Changes</h3>
            <p>
              {message[2]}
            </p>
            <p>
              Response rate is {message[3]} up {message[4]}
            </p>
          </>
      )
    }
  </Layout>
)

export default Messages;
