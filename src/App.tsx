import { useState } from "react"
import { v4 as uuid } from "uuid"

import { ThemeProvider } from "styled-components"
import { theme } from "./theme.css"

import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Wrapper } from "./components/Wrapper/Wrapper"
import { Post } from "./components/Post/Post"
import { Comment } from "./components/Comment/Comment"
import { Button } from "./components/Button/Button"

import { FakePosts, UserProps, PostProps } from "./data/fakePosts"

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { ModalStyled } from "./components/Modal/Modal.css"
ModalStyled.setAppElement("body")

type ModalProps = {
  show: boolean,
  commentId?: string
}

function App() {
  const [posts, setPosts] = useState<PostProps[]>(FakePosts)
  const [newComment, setNewComment] = useState<{postId?:string, text: string}>({text: ''})
  const [modalData, setModalData] = useState<ModalProps>({show: false});
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  function openModal(commentId: string) {
    setModalData({
      show: true,
      commentId
    }); 
  }

  function closeModal() {
    setModalData({show: false});
  }

  const fakeUser: UserProps = {
    id: "999",
    name: "Example name",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Support"
  }

  function handleSendComment() {
    const fakePosts = posts.map(post => {
      if(post.id == newComment.postId){
        post.comments.push({
            id: uuid(),
            author: fakeUser,
            created_at: new Date().toISOString(),
            text: newComment.text
          })
      }
      return post
    })    
    
    setPosts(fakePosts)
    setNewComment({
      text: '',
      postId: undefined
    })
    
  }

  function handleDeleteComment() {
    const fakePosts = posts.map(post => {
      const filteredComments = post.comments.filter(comment => comment.id != modalData.commentId)
      post.comments = filteredComments
      return post
    })

    setPosts(fakePosts)
    closeModal()
    //Feedback excluido com sucesso!
    toast.success('Feedback excluído com sucesso!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      transition: Bounce,
    });
  }

  function handleCommentLike(postId: string, commentId: string){
    const like = {
      id: uuid(),
      userId: fakeUser.id
    }
    
    const fakePosts = posts.map(post => {
      if(post.id == postId){
        const commentIndex = post.comments.findIndex(comment => comment.id == commentId)
        const findedLikeByUserId = post.comments[commentIndex].likes?.find(like => like.userId == fakeUser.id)
        
        if(findedLikeByUserId){
          const filteredLikes = post.comments[commentIndex].likes?.filter(like => like.userId != fakeUser.id)
          console.log(post.comments[commentIndex].likes);
          
          post.comments[commentIndex].likes = filteredLikes
          return post
        }
        
        if(!post.comments[commentIndex].likes){
          post.comments[commentIndex].likes = [like]
          return post
        }
        post.comments[commentIndex].likes?.push(like)
      }
      return post
    })

    setPosts(fakePosts)
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          >
        </ToastContainer>
        <Header onMenuClick={()=>setSidebarIsOpen(true)}/>
        <ModalStyled
        isOpen={modalData.show}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        >
          <div className="delete-comment">
            <h1>Excluir comentário</h1>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>
            <div className="buttons">
              <Button $variant="outline" onClick={closeModal}>Cancelar</Button>
              <Button $variant="filled" onClick={handleDeleteComment}>Sim, Excluir</Button>
            </div>
          </div>
        </ModalStyled>

        <Wrapper>
          <Sidebar $active={sidebarIsOpen} onCloseClick={()=>setSidebarIsOpen(false)}/>
          <div>
            {
              posts.map(post => 
                <Post 
                  key={post.id}
                  created_at={formatDistanceToNow(post.created_at, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                  tags={post.tags}
                  text={post.text}
                  user={post.user}
                >
                  <div className="feedback">
                    <h1>Deixe seu feedback</h1>
                    <textarea
                      onChange={(e)=>setNewComment({postId: post.id, text: e.target.value})} 
                      value={newComment.postId == post.id ? newComment.text : ''}
                      placeholder="Escreva um comentário"
                    ></textarea>
                    {newComment.text && newComment.postId == post.id &&
                      <Button 
                        onClick={handleSendComment}
                        $variant="filled">Publicar</Button>
                    }
                  </div>
                  {post.comments.map(comment => 
                    <Comment
                      key={comment.id}
                      created_at={formatDistanceToNow(comment.created_at, {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                      text={comment.text}
                      author={comment.author}
                      likes={comment.likes}
                      onLikeClick={()=> handleCommentLike(post.id, comment.id)}
                      onDeleteClick={()=>openModal(comment.id)}
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
