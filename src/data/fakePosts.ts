export type UserProps = {
    id: string
    avatar: string
    name: string
    occupation: string
}

export type PostProps = {
    id: string
    created_at: string
    user: UserProps,
    text: string
    tags: string[],
    comments: CommentProps[]
}

export type CommentProps = {
    id: string
    created_at: string
    user: UserProps
    text: string
    likes?: {
        id: string
        userId: string       
    }[]
}

export const FakePosts: PostProps[] = [
    {
        id: "1",
        created_at: "2024-11-11",
        tags: ["dev", "html", "css"], 
        text: "Lorem ipsum",
        user: {
            id: "111",
            avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Diego",
            occupation: "Developer"
        },
        comments: [
            {
                id: "111111",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "222",
                    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Jubilei",
                    occupation: "Scrum Master"
                },
                likes: [
                    {
                        id: '1111',
                        userId: '1111'
                    },
                    {
                        id: '2222',
                        userId: '2222'
                    }
                    ,{
                        id: '333',
                        userId: '3333'
                    }
                    ,{
                        id: '444',
                        userId: '444'
                    }
                    ,{
                        id: '5555',
                        userId: '555'
                    }
                ]
            },
            {
                id: "2222222",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "222",
                    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Jubilei",
                    occupation: "Scrum Master"
                }
            },
            {
                id: "333333",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "333",
                    avatar: " https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Clodosvaldo",
                    occupation: "DBA"
                }
            }
        ]
    },
    {
        id: "2",
        created_at: "2024-11-11",
        tags: ["dev", "html", "css"], 
        text: "Lorem ipsum",
        user: {
            id: "111",
            avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Diego",
            occupation: "Developer"
        },
        comments: [
            {
                id: "111111",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "222",
                    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Jubilei",
                    occupation: "Scrum Master"
                }
            },
            {
                id: "2222222",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "222",
                    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Jubilei",
                    occupation: "Scrum Master"
                }
            },
            {
                id: "333333",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "333",
                    avatar: " https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Clodosvaldo",
                    occupation: "DBA"
                }
            }
        ]
    },
    {
        id: "3",
        created_at: "2024-11-11",
        tags: ["dev", "html", "css"], 
        text: "Lorem ipsum",
        user: {
            id: "111",
            avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Diego",
            occupation: "Developer"
        },
        comments: [
            {
                id: "111111",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "222",
                    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Jubilei",
                    occupation: "Scrum Master"
                }
            },
            {
                id: "2222222",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "222",
                    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Jubilei",
                    occupation: "Scrum Master"
                }
            },
            {
                id: "333333",
                created_at: "2024-22-02",
                text: "test test",
                user: {
                    id: "333",
                    avatar: " https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Clodosvaldo",
                    occupation: "DBA"
                }
            }
        ]
    }
]