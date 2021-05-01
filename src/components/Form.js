import React, { useState } from 'react';
import firebase from '../firebase';
import { TextField } from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
const Form = () => {
    const [title, setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }
    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
            complete: false,
        };
        todoRef.push(todo);
        setTitle('')
    }
    return (
        <>
            <div className='form'>
                <TextField
                    variant='standard'
                    label='Add Todo'
                    type='text'
                    value={title}
                    onChange={handleOnChange}
                    className='textfield'
                    size='medium'
                />
                <div className='add'>
                    {
                        title === '' ?
                            <AddCircleOutlineOutlinedIcon
                                fontSize='large'
                                className='icon'
                            />
                            :
                            <AddCircleRoundedIcon
                                onClick={createTodo}
                                fontSize='large'
                                className='icon'
                            />
                    }
                </div>
            </div>
        </>
    );
}
export default Form;