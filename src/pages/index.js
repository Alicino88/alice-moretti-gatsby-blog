import React from "react"
import image from "../assets/images/hero.jpeg"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <Layout>
      <div>
        <Hero
          title="Hello you reader, welcome to my blog"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          homePic
        />
      </div>
    </Layout>
  )
}
