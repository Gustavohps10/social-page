import { ReactNode } from "react"
import { StyledWrapper } from "./Wrapper.css"

type WrapperProps = {
    children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
    return(
        <StyledWrapper>{ children }</StyledWrapper>
    )
}

export { Wrapper }