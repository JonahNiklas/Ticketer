export interface User {
    id: Number,
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
    posts: Post[]
    token?: Token
    ratingsGiven: Rating[]
    ratingsGotten: Rating[]
}

export interface Post {
    id: Number
    createdAt: Date
    timeOfEvent: Date
    city: String
    venue: String
    isActive: boolean
    forSale: boolean
    title: String
    description?: String
    catgetory: String
    price?: Number
}

export interface Token {
    id: Number
    createdAt: Date
    token: String
}

export interface Rating {
    id: Number
    createdAt: Date
    rating: Number
    givenBy: User
    gottenBy: User
    description?: String
}