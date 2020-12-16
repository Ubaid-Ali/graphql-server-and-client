const { gql } = require('apollo-server');


const typeDefs = gql`

# Book type and Book input type
  type Book {
      title: String
      author: String
  }
  input BookInput {
      title: String
      author: String
  }

# Student type and Student input type
  type Student {
    name: String
  }
  input StdInput {
    name: String
  }

  # All Mutations types
type Mutation {
  changeStudent(input: StdInput): Student,   # change student name type
  AddBook(input: BookInput): Book
} 

  # All Queries types 
  type Query {
    books: [Book]   # Books get type
    student: Student  # Student get type
  }
`;

module.exports = typeDefs;