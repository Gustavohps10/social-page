import { ReactNode } from "react"
import { StyledButton } from "./Button.css"

type ButtonProps = {
    children: ReactNode
}

function Button({ children }: ButtonProps) {
    return(
        <StyledButton as="a">{ children }</StyledButton>
    )
}

export { Button }