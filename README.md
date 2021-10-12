This is my first real-life project built with Gatsby.js.
It was particularly interesting to handle to following topics:

- Setting up pages programmatically:
  To create the single blog pages I have used the file system route API {ContentfulBlog.slug}.js 
  To filter the blog post by topic I have used gatsby-node.js file together with the createPage function.
  
- Rendering and styling the rich text field from Contentful. For this I have used the renderRichText method
  together with the "@contentful/rich-text-types" package.
