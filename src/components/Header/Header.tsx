import { StyledHeader } from "./Header.css";

import igniteLogo from "../../assets/ignite-logo.svg"

function Header() {
    return(
        <StyledHeader>
            <img className="logo" src={igniteLogo} alt="Ignite Logo" />
            Social Feed
        </StyledHeader>
    )
}

export { Header }