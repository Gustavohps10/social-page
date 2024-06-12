import { useState } from "react"

import { ThemeProvider } from "styled-components"
import { theme } from "./theme.css"

import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Wrapper } from "./components/Wrapper/Wrapper"
import { Post } from "./components/Post/Post"
import { Comment } from "./components/Comment/Comment"

import { FakePosts } from "./data/fakePosts"


function App() {
  const [posts, setPosts] = useState(FakePosts)

  return (
    <ThemeProvider theme={theme}>
        <Header/>
       
        <Wrapper>
          <Sidebar/>
          <div>
            {
              posts.map(post => 
                <Post 
                  key={post.id}
                  created_at={post.created_at}
                  tags={post.tags}
                  text={post.text}
                  user={post.user}
                >
                  {post.comments.map(comment => 
                    <Comment
                      key={comment.id}
                      created_at={comment.created_at}
                      text={comment.text}
                      user={comment.user}
                    />
                  )}
                </Post>
              )
            }
          </div>
        </Wrapper>
    </ThemeProvider>
  )
}

export default App
