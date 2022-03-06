import React from 'react'

export default function TodoItem({todoItem, onDeleteTodo}) {
    return (
        <li className="mt-4" id="1" >
            <div className="flex gap-2">
                <div className="w-9/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center">
                    <p className="text-sm ml-4 text-[#5b7a9d] font-semibold truncate hover:text-clip">{todoItem.content}</p>
                </div>
                <button 
                    className="w-1/4 h-12 add_task text-sm hover:bg-red-500 cursor-pointer text-white bg-red-400 rounded-lg"
                    onClick={() => {onDeleteTodo(todoItem.id)}}
                >X</button> 
            </div>
        </li>
    )
}
