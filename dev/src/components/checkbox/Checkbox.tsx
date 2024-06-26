import React from 'react'

type checkboxType =
  | 'checkbox-primary'
  | 'checkbox-secondary'
  | 'checkbox-accent'
  | 'checkbox-success'
  | 'checkbox-warning'
  | 'checkbox-error'
  | 'checkbox-info'

type toggleType =
  | 'toggle-primary'
  | 'toggle-secondary'
  | 'toggle-accent'
  | 'toggle-success'
  | 'toggle-warning'
  | 'toggle-error'
  | 'toggle-info'

type checkboxSize =
  | 'checkbox-xs'
  | 'checkbox-sm'
  | 'checkbox-md'
  | 'checkbox-lg'

type toggleSize = 'toggle-xs' | 'toggle-sm' | 'toggle-md' | 'toggle-lg'

interface checkboxParameters
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: React.ReactNode
  isRightSide?: boolean
  className?: string
  checkboxAnimated?: boolean
  inputType?: checkboxType | toggleType
  inputSize?: checkboxSize | toggleSize
  isToggle?: boolean
}

export function Checkbox({
  children,
  isRightSide,
  className,
  checkboxAnimated,
  inputType,
  inputSize,
  isToggle,
  ...rest
}: checkboxParameters) {
  const chckBox = (
    <input
      type='checkbox'
      className={`${isToggle ? 'toggle' : 'checkbox'}${
        checkboxAnimated ? ' interactive' : ''
      } ${inputType} ${inputSize} ${className}`}
      {...rest}
    />
  )

  return children ? (
    <label className='label cursor-pointer flex gap-2 justify-between items-center min-h-[32px]'>
      {!isRightSide && chckBox}
      <span className='label-text font-medium'>{children}</span>
      {isRightSide && chckBox}
    </label>
  ) : (
    chckBox
  )
}
