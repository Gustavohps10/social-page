import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Wrapper } from "./components/Wrapper/Wrapper"

function App() {

  return (
    <>
        <Header/>
       
        <Wrapper>
          <Sidebar/>
          <div>teste</div>
        </Wrapper>
    </>
  )
}

export default App
