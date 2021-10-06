import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import BlogPosts from "../components/BlogPosts"
import About from "../components/About"

export default function Home() {
  return (
    <Layout>
      <div>
        <Hero
          title="Hello visitor! Welcome to my blog"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          homePic
        />
        <div className="main-container">
          <BlogPosts />
          <About />
        </div>
      </div>
    </Layout>
  )
}
