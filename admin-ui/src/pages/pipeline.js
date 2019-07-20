import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const candidates = [
  ['Candidate 1', 'Lead (L0)'],
  ['Candidate 2', 'Lead (L0)'],
  ['Candidate 3', 'Phone Screen (L1)'],
  ['Candidate 4', 'In person interview (L2)'],
  ['Candidate 5', 'Made offer (L3)'],
  ['Candidate 6', 'Offer Accepted (L4)'],
  ['Candidate 7', 'Candidate started (L5)']
]

const SecondPage = () => (
  <Layout>
    <SEO title="Pipeline" />
    <h1>Lead Pipeline</h1>
    <table>
      <tr>
        <th>Candidate ID</th>
        <th>Candidate Stage</th>
      </tr>
        {
          candidates.map(
            (candidate) => 
              <tr>
                <td>
                  {candidate[0]}
                </td>
                <td>
                  {candidate[1]}
                </td>
                <td>
                  Call | Email | Mark On Hold
                </td>
              </tr>
          )
        }
    </table>

  </Layout>
)

export default SecondPage
