import React, { createRef } from 'react'
import { useQuery, useMutation } from '@apollo/client'

// Import Query and Mutation
import { GET_STUDENT, CHANGE_STUDENT } from '../gqlSchema'




function Student() {
    const { loading, error, data } = useQuery(GET_STUDENT);
    const [addName] = useMutation(CHANGE_STUDENT);

    const nameValue = createRef();

    const clickEvent = () => {
        let name = nameValue.current.value;
        addName({ variables: { data: { name } } })
            .then((data) => {
                console.log('data', data)
            })
            .catch((err) => {
                console.log('error', err)
            })
    }

    if (loading)   return <p>loading...</p>;
    if (error)   return <p> error</p>;
    return (
        <div>
            <h5>Student Component</h5>
            <input ref={nameValue} type="text" placeholder="Name" />
            <br />
            <button onClick={clickEvent} > Change Name </button>
        </div>
    );
}

export default Student