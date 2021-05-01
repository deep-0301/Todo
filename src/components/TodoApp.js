import { motion } from 'framer-motion';
import Form from './Form'
import TodoList from './TodoList';

const TodoApp = () => {
    return (
        <>
            <motion.div className='todoapp'>
                <h1>Todo App</h1>
                <Form />
                <TodoList />
            </motion.div>
        </>
    );
}

export default TodoApp;