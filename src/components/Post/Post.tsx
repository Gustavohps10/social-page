import { ReactNode } from "react"
import { Avatar } from "../Avatar/Avatar"
import * as S from "./Post.css"


export type PostProps = {
    created_at: string
    user: {
        avatar: string
        name: string
        occupation: string
    },
    text: string
    tags: string[],
    children?: ReactNode
}

function Post({ created_at, user, text, tags, children }: PostProps) {
    return(
        <S.StyledPost>
            <header>
                <div className="profile">
                    <Avatar $outline src={user.avatar}/>
                    <div className="data">
                        <strong>{user.name}</strong>
                        <span>{user.occupation}</span>
                    </div>
                </div>
                <span>{created_at}</span>
            </header>
            
            <div className="content">
                <p>{text}</p>
                <ul className="tags">
                { tags.map(tag => <li key={tag}>{ '#'+tag }</li>) }
                </ul>
            </div>

            {children}
        </S.StyledPost>
    )
}

export { Post }