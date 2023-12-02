import {
  useState,
  useCallback,
  ChangeEvent,
  useEffect,
  useContext,
  FormEvent,
} from "react"
import { GlobalsContext } from "../../context/globals"
import { Globals, Type } from "../../types/global_state"
export default function AskingName() {
  const [name, setName] = useState(localStorage.getItem("name") ?? "")
  const { setType } = useContext(GlobalsContext) as Globals
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setName(value)
  }, [])
  useEffect(() => {
    localStorage.setItem("name", name)
  }, [name])
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setType(Type.HOMEPAGE)
  }, [])
  return (
    <div className="h-screen grid place-items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="What is your name? "
          className="outline-none text-3xl placeholder:text-gray-300 font-bold border-b py-2 lg:text-5xl text-center caret-indigo-500"
        />
        <button type="submit" hidden />
      </form>
    </div>
  )
}
