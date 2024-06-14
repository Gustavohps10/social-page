import * as S from "./Sidebar.css"
import { Avatar } from "../Avatar/Avatar"
import { Button } from "../Button/Button"
import { RiEditLine, RiCloseLargeFill } from "react-icons/ri"


function Sidebar({onCloseClick,...props}:S.StyledSidebarProps & {onCloseClick: ()=> void }) {
    return(
        <S.StyledSidebar {...props}>
            <RiCloseLargeFill className="close-icon" onClick={onCloseClick}/>
            <img className="cover" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Cover" />
            
            <div className="profile">
                <Avatar $outline className="avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <strong>Example Name</strong>
                <span>UI Designer</span>
            </div>
            
            <footer>
                <Button $variant="outline">
                <RiEditLine size="1.25rem"/>
                    Editar seu perfil
                </Button>
            </footer>
        </S.StyledSidebar>
    )
}

export { Sidebar }