import React from 'react';
import EditAttraction from './EditAttraction';
import { useParams } from 'react-router';

const EditAttractionWrapper = (props) => {
    let {id} = useParams();

    return (
        <EditAttraction id={id} />
    );
};

export default EditAttractionWrapper;