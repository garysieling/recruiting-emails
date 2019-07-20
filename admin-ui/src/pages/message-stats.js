import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MessageStats = () => (
  <Layout>
    <SEO title="Message stats" />
    <h1>Message Stats</h1>
    <h2>
      Stats
    </h2>
    <select >
      <option>
        By Recruiter
      </option>
      <option>
        By Referrer
      </option>
      <option>
        By Stage
      </option>
      <option>
        By Test Version
      </option>
      <option>
        By Message
      </option>
      <option>
        Is Remote
      </option>
      <option>
        Business Unit
      </option>
      <option>
        Hiring Manager
      </option>
      <option>
        Role
      </option>
      <option>
        Position>
      </option>
      <option>
        Job Board
      </option>
      <option>
        Overall
      </option>
    </select>
    <table>
      <tr>
        <th>
          Type
        </th>
        <th>
          Duration
        </th>
      </tr>
      <tr>
        <td>Average Time from start to first day</td>
        <td>2 months</td>
        <td>50%</td>
      </tr>
      <tr>
        <td>Average Time from start to offer</td>
        <td>2 months</td>
        <td>55%</td>
      </tr>
      <tr>
        <td>Average Time to initial contact</td>
        <td>3 days</td>
        <td>
          10%
        </td>
      </tr>
      <tr>
        <td>
          Average Stage Length
        </td>
        <td>
          5 days
        </td>
      </tr>
      <tr>
        <td>
          Average Message response Time
        </td>
      </tr>
    </table>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MessageStats
