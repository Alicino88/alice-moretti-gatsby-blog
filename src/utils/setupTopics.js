const setupTopics = blogs => {
  const allTopics = []
  blogs.forEach(blog => {
    blog.topics.forEach(topic => {
      allTopics.push(topic)
    })
  })
  console.log(allTopics)
  const newTopics = [...new Set(allTopics)]
  console.log(newTopics)
  return newTopics
}

export default setupTopics
