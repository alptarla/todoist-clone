import { SelectHTMLAttributes } from 'react'

type Option = {
  value: any
  label: string
}

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: Option[]
  label?: string
  error?: string
}

function Select({ options, label, error, ...rest }: IProps) {
  return (
    <div className={rest.className}>
      <label htmlFor={rest.id}>{label}</label>
      <select
        {...rest}
        className={`w-full rounded border p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}
        defaultValue="placeholder"
      >
        <option value="placeholder" disabled>
          {rest.placeholder}
        </option>
        {options?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error ? <p className="pt-1 text-sm text-red-500">{error}</p> : null}
    </div>
  )
}

export default Select
