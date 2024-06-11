import type {ImgHTMLAttributes} from "react"
import * as S from "./Avatar.css"

function Avatar({...props}: ImgHTMLAttributes<HTMLImageElement>) {
    return(
        <S.StyledAvatar {...props} />
    )
}

export { Avatar }