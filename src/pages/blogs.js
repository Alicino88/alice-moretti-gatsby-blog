import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const Blogs = () => {
  return (
    <Layout>
      <div>
        <Hero
          title="all blogs"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          blogsPic
        />
      </div>
    </Layout>
  )
}

export default Blogs
