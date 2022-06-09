import React, {ChangeEvent} from 'react';

type inputPropsType = {
    setTitle:(title: string)=>void
    title: string
}

export const Input2 = (props:inputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
         <input value={props.title} onChange={onChangeHandler}/>
    );
};
