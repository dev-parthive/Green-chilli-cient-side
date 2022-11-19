import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const {id} = useParams()
    // const {id} = route
    console.log(id)
    return (
        <div>
            <h2>This si the edit page {id}</h2>

        </div>
    );
};

export default Edit;