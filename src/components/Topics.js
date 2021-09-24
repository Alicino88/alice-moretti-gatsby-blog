import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import setupTopics from "../utils/setupTopics"

const query = graphql`
  {
    allContentfulBlog {
      nodes {
        topics
        id
      }
    }
  }
`
const Topics = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulBlog: { nodes: blogs },
  } = data
  console.log(blogs)
  /*setupTopics function is defined in the utils folder. It adds all the topics to an array (allTopics) 
  and then removes the duplicates by first creating a set and then convert it into an array.
  https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/*/
  const newTopics = setupTopics(blogs)
  return (
    <div className="topic-container">
      {newTopics.map(topic => {
        return <button className="btn-topic">{topic}</button>
      })}
    </div>
  )
}

export default Topics
