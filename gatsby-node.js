const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetTopics {
      allContentfulBlog {
        distinct(field: topics)
      }
    }
  `)
  console.log(result)

  result.data.allContentfulBlog.distinct.forEach(topic => {
    //const topicSlug = slugify(topic, { lower: true })
    createPage({
      path: `/topics/${topic}`,
      component: path.resolve(`src/templates/topic-template.js`),
      context: {
        topic: topic,
      },
    })
  })
}
