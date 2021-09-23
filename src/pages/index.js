import React from "react"
import styled from "styled-components"
import image from "../assets/images/hero.jpeg"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import BlogPosts from "../components/BlogPosts"
import About from "../components/About"

export default function Home() {
  return (
    <Layout>
      <div>
        <Hero
          title="Hello you reader, welcome to my blog"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          homePic
        />
        <Wrapper>
          <div className="main-container">
            <BlogPosts />
            <About />
          </div>
        </Wrapper>
      </div>
    </Layout>
  )
}

const Wrapper = styled.section`
  margin-top: 70vh;
  .main-container {
    padding: 2rem 1rem;
  }
  @media (min-width: 700px) {
    .main-container {
      padding: 2rem 5rem;
      margin: auto;
    }
  }

  @media (min-width: 940px) {
    .main-container {
      padding: 2rem;
    }
  }
  @media (min-width: 1176px) {
    .main-container {
      width: 100%;
      max-width: 1270px;
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
  }
`
