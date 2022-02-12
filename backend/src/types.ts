export interface User {
    id: Number,
    firstName: string
    lastName: string
    userName: string
    email: string
    password: string
    posts: Post[]
    token?: Token
    ratingsGiven: Rating[]
    ratingsGotten: Rating[]
}

export interface Post {
    id: Number
    createdAt: Date
    timeOfEvent: Date
    city: string
    venue: string
    isActive: boolean
    forSale: boolean
    title: string
    description?: string
    catgetory: string
    price?: Number
}

export interface Token {
    id: Number
    createdAt: Date
    token: string
}

export interface Rating {
    id: Number
    createdAt: Date
    rating: Number
    givenBy: User
    gottenBy: User
    description?: string
}

export interface Error {
    errorMessage: string
    errorCode: Number
}