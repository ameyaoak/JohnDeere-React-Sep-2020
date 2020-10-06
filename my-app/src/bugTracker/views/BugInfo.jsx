import React from 'react';
import { useParams } from 'react-router-dom';

const BugInfo = () => {
    const { id } = useParams();
    return (
        <h3>Bug Info - [{id}]</h3>
    )
};



export default BugInfo;