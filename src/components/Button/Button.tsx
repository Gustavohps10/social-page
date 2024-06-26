import { StyledButton, StyledButtonProps } from "./Button.css"

function Button({children, ...props}: StyledButtonProps) {
    return(
        <StyledButton {...props}>{ children }</StyledButton>
    )
}

export { Button }