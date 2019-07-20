import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const candidate = {
  name: 'Bob Loblaw',
  referral: true,
  events: [
    ['[12/28/2018]', 'Initial contact'],
    ['[1/1/19]', 'Scheduled phone screen for 1/5/2019'],
    ['[1/5/19]', 'Candidate Moved phone screen to 1/7/2019'],
    ['[1/7/19]', 'Held phone screen'],
    ['[1/7/19]', 'Schedule interview test for 1/9/2019'],
    ['[1/9/19]', 'Candidate took interview test'],
    ['[1/13/19]', 'Candidate follow-up call, scheduled in-person interview for 2/1/2019'],
    ['[2/1/2019]', 'Candidate in-person interview'],
    ['[2/5/2019]', 'Call with candidate to make offer'],
    ['[3/1/2019]', 'Candidate start date']
  ]
}

const CandidateHistory = () => (
  <Layout>
    <SEO title="Pipeline" />
    <h1>History for candidate {candidate.name}</h1>
    {
      candidate.referral ? 'Referral' : 'Not referral'
    }
    <h2>
      Stats
    </h2>
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
        <td>Time from start to first day</td>
        <td>2 months</td>
      </tr>
      <tr>
        <td>Time from start to offer</td>
        <td>2 months</td>
      </tr>
      <tr>
        <td>Time to initial contact</td>
        <td>3 days</td>
      </tr>
      <tr>
        <td>Emails to completion</td>
        <td>16</td>
      </tr>
    </table>
    <h2>Audit trail</h2>
    <table>
      <tr>
        <th>
          Time
        </th>
        <th>
          Event
        </th>
      </tr>
      {
      candidate.events.map(
        (event) => 
          <tr>
            <td>
              {event[0]}
            </td>
            <td>
              {event[1]}
            </td>
          </tr>
      )
    }
    </table>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CandidateHistory;
