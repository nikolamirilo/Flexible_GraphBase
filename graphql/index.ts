export const getUserQuery = `
    query GetUser($email: String!){
        user(by: {email: $email}){
            id
            name
            email
            avatarUrl
            desciprtion
            githubUrl
            linkedinUrl
        }
    }
`
export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!){
        userCreate(input: $input){
            user{
                id
                name
                email
                avatarUrl
                desciprtion
                githubUrl
                linkedinUrl
            }
        }
    }
`