import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Title from "../components/Title"

const Blogs = () => {
  return (
    <Layout>
      <div>
        <Hero
          title="all blogs"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          blogsPic
        />
        <div className="main-container-blogs">
          <Title />
        </div>
      </div>
    </Layout>
  )
}

export default Blogs
