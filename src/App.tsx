import { ThemeProvider } from "styled-components"
import { theme } from "./theme.css"

import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Wrapper } from "./components/Wrapper/Wrapper"
import { Post } from "./components/Post/Post"

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Header/>
       
        <Wrapper>
          <Sidebar/>
          <div>
            <Post
              created_at="2024-11-11" 
              tags={["design", "test", "test2"]}
              user={{
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Joãozinho1234",
                occupation: "UI Designer"
              }}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas culpa laborum harum cum voluptates vel ab quidem nobis fugiat a, soluta aliquid iste eius quaerat dolore unde voluptatum ea?"
            />
            <Post
              created_at="2024-11-11" 
              tags={["design", "test", "test2"]}
              user={{
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Joãozinho1234",
                occupation: "UI Designer"
              }}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas culpa laborum harum cum voluptates vel ab quidem nobis fugiat a, soluta aliquid iste eius quaerat dolore unde voluptatum ea?"
            />
            <Post
              created_at="2024-11-11" 
              tags={["design", "test", "test2"]}
              user={{
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Joãozinho1234",
                occupation: "UI Designer"
              }}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas culpa laborum harum cum voluptates vel ab quidem nobis fugiat a, soluta aliquid iste eius quaerat dolore unde voluptatum ea?"
            />
          </div>
        </Wrapper>
    </ThemeProvider>
  )
}

export default App
