
// Array of Object Dummy Data
const books = [
    { title: 'The Awakening', author: 'Kate Chopin', },
    { title: 'City of Glass', author: 'Paul Auster', }
];

// Student Name Dummy Data
const student = {
    name: "Aamir"
}

// Resolver
const resolvers = {
    Query: {
        // Get Books
        books: () => books,

        // Get Student
        student: () => student
    },


    Mutation: {
        // Change Student Name
        changeStudent(_, { input }) {
            return input
        },

        AddBook(_,{input}) {
            let newBook = {title: input.title, author: input.author}
            let newIndex = books.length
            // console.log('books before = ', books)
            books[newIndex] = newBook;
            console.log('books after = ', books)
            return input
        }
    }
};



module.exports = resolvers;