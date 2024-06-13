import { useState } from "react"
import { v4 as uuid } from "uuid"

import { ThemeProvider } from "styled-components"
import { theme } from "./theme.css"

import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Wrapper } from "./components/Wrapper/Wrapper"
import { Post } from "./components/Post/Post"
import { Comment } from "./components/Comment/Comment"

import { FakePosts, UserProps, PostProps } from "./data/fakePosts"
import { Button } from "./components/Button/Button"


function App() {
  const [posts, setPosts] = useState<PostProps[]>(FakePosts)
  const [comment, setComment] = useState<{postId?:string, text: string}>({text: ''})

  function handleSendComment() {
    const fakeUser: UserProps = {
      id: "999999",
      name: "Your name",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      occupation: "Support"
    }

    const fakePosts = posts.map(post => {
      if(post.id == comment.postId){
        post.comments.push({
            id: uuid(),
            user: fakeUser,
            created_at: new Date().toISOString(),
            text: comment.text
          })
      }
      return post
    })    
    
    setPosts(fakePosts)
    setComment({
      text: '',
      postId: undefined
    })
    console.log(posts);
    
  }

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
                  <div className="feedback">
                    <h1>Deixe seu feedback</h1>
                    <textarea
                      onChange={(e)=>setComment({postId: post.id, text: e.target.value})} 
                      value={comment.text}
                      placeholder="Escreva um comentário"
                    ></textarea>
                    {comment.text && comment.postId == post.id &&
                      <Button 
                        onClick={handleSendComment}
                        $variant="filled">Publicar</Button>
                    }
                  </div>
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
