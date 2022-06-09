import React, {ChangeEvent, useState} from 'react';

type inputPropsType = {
    callback: (title:string) => void
}


export const Input = (props: inputPropsType) => {

    let [title, setTitle] = useState('')


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        }

    const onClickButtonHandler = () => {
        props.callback(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

