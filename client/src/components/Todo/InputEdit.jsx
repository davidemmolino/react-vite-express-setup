import React from 'react';

const InputEdit = ({ doneEdit, setUpdatedTodoItem  }) => {
    return <>
        <input type="text" />
        <button onChange={(e) => setUpdatedTodoItem(e.target.value)} onClick={doneEdit}>done</button>
    </>
};

export default InputEdit;