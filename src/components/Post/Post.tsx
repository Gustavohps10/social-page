import { ReactNode } from "react"
import { Avatar } from "../Avatar/Avatar"
import { Button } from "../Button/Button"
import * as S from "./Post.css"


type PostProps = {
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
                    <Avatar src={user.avatar}/>
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
                { tags.map(tag => <li>{ '#'+tag }</li>) }
                </ul>
            </div>

            <div className="feedback">
                <h1>Deixe seu feedback</h1>
                <textarea placeholder="Escreva um comentário"></textarea>
                <Button variant="filled">Publicar</Button>
            </div>
            {children}
        </S.StyledPost>
    )
}

export { Post }