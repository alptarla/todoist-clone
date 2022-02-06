import { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

function Input({ label, error, ...rest }: IProps) {
  return (
    <div className={rest.className}>
      <label htmlFor={rest.id}>{label}</label>
      <input
        {...rest}
        className={`w-full rounded border py-1 px-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error ? <p className="pt-1 text-sm text-red-500">{error}</p> : null}
    </div>
  )
}

export default Input
