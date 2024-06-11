import { Avatar } from "../Avatar/Avatar"
import { Button } from "../Button/Button"
import { StyledSidebar } from "./Sidebar.css"
import { RiEditLine } from "react-icons/ri"

function Sidebar() {
    return(
        <StyledSidebar>
            <img className="cover" src="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Cover" />
            
            <div className="profile">
                <Avatar className="avatar" src="https://img.freepik.com/free-photo/half-face-portrait-beautiful-spanish-man-casual-blue-t-shirt-with-trendy-hair-beard-showing-his-profile-looking-left-copy-space_176420-10334.jpg?w=740&t=st=1717964106~exp=1717964706~hmac=6a120cd0b8b91e0f7a6874c4e4aaf925ec78e8d963686b536584fb1664e52cf0"/>
                <strong>Example Name</strong>
                <span>UI Designer</span>
            </div>
            
            <footer>
                <Button variant="outline">
                <RiEditLine size="1.25rem"/>
                    Editar seu perfil
                </Button>
            </footer>
        </StyledSidebar>
    )
}

export { Sidebar }