import { Avatar } from "../Avatar/Avatar"
import * as S from "./Comment.css"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BiLike } from "react-icons/bi"

type CommentProps = {
    created_at: string
    user: {
        avatar: string
        name: string
        occupation: string
    },
    text: string
}

function Comment({created_at, user, text}: CommentProps){
    return(
        <S.StyledComment>
            <div className="profile">
                <Avatar src={user.avatar}/>
            </div>
            <div className="content">
                <aside>
                    <header>
                        <div className="data">
                            <strong>{user.name}</strong>
                            <span>{created_at}</span>
                        </div>
                        <RiDeleteBin6Line/>
                    </header>
                    <p>{text}</p>
                </aside>
                <div className="like">
                    <BiLike/>
                    <strong>Aplaudir • 33</strong>
                </div>
            </div>
        </S.StyledComment>
    )
}

export {Comment}