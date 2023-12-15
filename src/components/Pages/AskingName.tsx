import { useCallback, ChangeEvent, useContext, FormEvent } from "react"
import { GlobalsContext } from "../../context/globals"
import { Globals, Type } from "../../types/global_state"
import { Input } from "../ui/input"
export default function AskingName() {
  const { setType, setName, name } = useContext(GlobalsContext) as Globals
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setName(value)
    },
    [setName]
  )
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setType(Type.HOMEPAGE)
    },
    [setType]
  )
  return (
    <div className="h-screen grid place-items-center">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="What's your name? "
          className="outline-none text-3xl placeholder:text-gray-300 font-bold lg:text-5xl text-center caret-indigo-500 border-0 border-b rounded-one"
        />
        <button type="submit" hidden />
      </form>
    </div>
  )
}
