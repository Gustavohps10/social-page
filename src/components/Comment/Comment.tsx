import { Avatar } from "../Avatar/Avatar"
import * as S from "./Comment.css"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BiLike } from "react-icons/bi"

type CommentProps = {
    created_at: string
    author: {
        id: string
        avatar: string
        name: string
        occupation: string
    },
    text: string
    likes?: {
        id: string
        userId: string       
    }[]
    onLikeClick: () => void
    onDeleteClick: () => void
}

function Comment({created_at, author, text, likes, onLikeClick, onDeleteClick}: CommentProps){
    function handleActiveLike(){
        const like = likes?.find(like => like.userId == '999')
        return like ? true : false
    }
    
    return(
        <S.StyledComment>
            <div className="profile">
                <Avatar src={author.avatar}/>
            </div>
            <div className="content">
                <aside>
                    <header>
                        <div className="data">
                            <strong>{author.name} {author.id == '999' && <span>(você)</span>}</strong>
                            <span>{created_at}</span>
                        </div>
                        {author.id == '999' && <RiDeleteBin6Line onClick={onDeleteClick}/>}
                    </header>
                    <p>{text}</p>
                </aside>
                <S.Like $active={handleActiveLike()} onClick={onLikeClick}>
                    <BiLike/>
                    <strong>Aplaudir • {likes?.length || 0}</strong>
                </S.Like>
            </div>
        </S.StyledComment>
    )
}

export {Comment}