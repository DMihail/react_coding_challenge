import React from 'react';
import {Image, Spinner } from 'react-bootstrap';

export const Img: React.FC<{imgUrl: string|undefined}>= (props) => {
    if (props.imgUrl)
    return(
        <Image src={ `https://image.tmdb.org/t/p/w500${props.imgUrl}`}  width={'w-100'} height={'h-50'}/>
    )

    return (
        <Spinner animation="border" variant="primary" />
    )
}
