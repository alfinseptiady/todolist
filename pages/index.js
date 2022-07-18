import { useState } from "react"


const Index = () => {

    const [userInput,setUserInput] = useState('')
    const [todoList,setTodoList] = useState([])

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
        
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        setTodoList(state => [...state, userInput])
    }

    const handleDelete = (todo) =>{
        const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))

        setTodoList(updateArr)
    }


    return(
        <div>
            <h3>Membuat TodoList Dengan Next.Js</h3>
            <form>
                <input type="text" value={userInput} onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>

            <ul>
                { 
                    todoList.length >= 1 ? todoList.map((todo, idx) => {
                        return <li key={idx}>{todo}<button onClick={(e) =>{
                            e.preventDefault()
                            handleDelete(todo)
                        }}>Hapus</button></li>
                    })
                    : 'List sebuah todo item'
                }
            </ul>
            
        </div>
    
    )
}

export default Index    