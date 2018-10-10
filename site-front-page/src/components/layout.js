import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Navigation from "./navigation"
import 'bootstrap/dist/css/bootstrap.min.css';


export default ({ children }) => (
    <StaticQuery
        query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
        }
        render={data => (
            <div>
                <Navigation />
            </div>
        )}
    />
)