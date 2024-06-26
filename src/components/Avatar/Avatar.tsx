import * as S from "./Avatar.css"

function Avatar({...props}: S.StyledAvatarProps) {
    return(
        <S.StyledAvatar {...props} />
    )
}

export { Avatar }