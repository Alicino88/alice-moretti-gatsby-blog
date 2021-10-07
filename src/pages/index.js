import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import BlogPosts from "../components/BlogPosts"
import About from "../components/About"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Alice Moretti | Articles about Frontend Development"
        description="this is the blog"
      />
      <div>
        <Hero
          title="Hello visitor! Welcome to my blog"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          homePic
        />
        <div className="main-container">
          {/*BlogPosts contains StaticQuery to fetch the 3 featured blog posts */}

          <BlogPosts />
          <About />
        </div>
      </div>
    </Layout>
  )
}
