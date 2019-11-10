import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import NotFoundAnimation from './../styles/404.json';

const NotFound = () => {
    const BodyMovimOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: NotFoundAnimation
    }
    return (
        <div>
            <ReactBodyMovin options={BodyMovimOptions}></ReactBodyMovin>
        </div>
    )
}

export default NotFound;