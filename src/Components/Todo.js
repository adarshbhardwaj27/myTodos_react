import React from 'react'

export const Todo = ({ todo, todoDel }) => {
    return (
        <>
            <div className="card mt-3 mx-auto" style={{ "width": "48rem" }}>
                <div className="card-body mx-auto">
                    <h5 className="card-title fs-1 text-center">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>

                        <button type='button' className='btn btn-danger' onClick={() => { todoDel(todo) }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
