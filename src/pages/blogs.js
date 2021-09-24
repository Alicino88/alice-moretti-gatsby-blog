import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Title from "../components/Title"
import Topics from "../components/Topics"

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
          <Topics />
        </div>
      </div>
    </Layout>
  )
}

export default Blogs
