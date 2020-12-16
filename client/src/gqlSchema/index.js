import { gql } from '@apollo/client'

// Mutation
const CHANGE_STUDENT = gql`
    mutation student($data : StdInput) {
        changeStudent(input: $data) {
            name
        }
    } 
`;

// Query
const GET_STUDENT = gql`
    query getStudent {
        student {
            name
        }
    }
`;

// Export 
export {
    CHANGE_STUDENT,
    GET_STUDENT
};

