import React from "react"

//when creating a page programmatically using gatsby file system route API
//gatsby passes a lot of useful information (props) we can see by console log the.
const Topic = props => {
  console.log(props)
  return <div>{props.params.title}</div>
}

export default Topic
