import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodo } from '../redux/todoSlice'
import { useAppSelector } from '../redux/Hook'
const Todo = () => {
  const dispatch = useDispatch()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useAppSelector((state) => state.todo)
  useEffect(() => {
    dispatch(fetchTodo())
  }, [])
  console.log(data)
  return (
    <>
      {data.data.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </>
  )
}

export default Todo
