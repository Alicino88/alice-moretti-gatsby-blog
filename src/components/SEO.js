import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
          name: `image`,
          content: image,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
