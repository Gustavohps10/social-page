import { ReactNode } from "react"
import { StyledButton } from "./Button.css"

type ButtonProps = {
    children: ReactNode,
    variant: "filled" | "outline"
}

function Button({ children, variant }: ButtonProps) {
    return(
        <StyledButton $variant={variant}>{ children }</StyledButton>
    )
}

export { Button }