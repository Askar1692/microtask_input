import React, {useState} from 'react';
import './App.css';
import {Input} from "./Input/Input";
import {Input2} from "./Input/Input2";
import {Button} from "./Input/Button";

function App() {

    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title:string) => {
        console.log(title)
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }

    const onClickHandler = () => {
        addMessage(title)
        setTitle('')
    }

    let [title, setTitle] = useState('')
    console.log(title)


    return (
        <div className="App">
            {/*<Input callback={addMessage}/>*/}
            <div>
            <Input2 setTitle={setTitle} title={title}/>
            <Button name={'+'} callback={onClickHandler}/>
            </div>
            <div>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
