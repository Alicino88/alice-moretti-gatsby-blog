import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import setupTopics from "../utils/setupTopics"
import { Link } from "gatsby"

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
      <Link to={`/blogs`}>
        <button className="btn-topic">All</button>
      </Link>
      {newTopics.map(topic => {
        return (
          <Link to={`/blogs/${topic}`} className="link" key={topic}>
            <button className="btn-topic">{topic}</button>
          </Link>
        )
      })}
    </div>
  )
}

export default Topics
