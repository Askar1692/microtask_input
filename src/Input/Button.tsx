import React from 'react';

type buttonPropstype = {
    name: string
    callback: () => void
}

export const Button = (props:buttonPropstype) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};
