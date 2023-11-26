import React from "react"

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
}
export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 items-center p-2 rounded-lg bg-indigo-400 text-white transition hover:bg-indigo-500"
    >
      {children}
    </button>
  )
}
