import { StyledHeader } from "./Header.css";

import igniteLogo from "../../assets/ignite-logo.svg"
import { RiMenu2Fill } from "react-icons/ri";

type HeaderProps = {
    onMenuClick: ()=>void
}

function Header({onMenuClick}: HeaderProps) {
    return(
        <StyledHeader>
            <RiMenu2Fill className="menu-icon" onClick={onMenuClick}/>
            <div>
                <img className="logo" src={igniteLogo} alt="Ignite Logo" />
                <span>Social Feed</span>
            </div>
        </StyledHeader>
    )
}

export { Header }