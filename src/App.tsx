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
            <Post />
          </div>
        </Wrapper>
    </ThemeProvider>
  )
}

export default App
