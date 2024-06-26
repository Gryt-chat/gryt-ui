import React from 'react'
type badgeType =
  | 'badge-primary'
  | 'badge-secondary'
  | 'badge-accent'
  | 'badge-ghost'
  | 'badge-outline'
  | 'badge-error'
  | 'badge-success'
  | 'badge-info'
  | 'badge-warning'

type badgeSize = 'badge-lg' | 'badge-md' | 'badge-sm' | 'badge-xs'
type badgeParameterType = {
  children?: any
  type?: badgeType
  size?: badgeSize
}

export function Badge({ children, type, size, ...props }: badgeParameterType) {
  return (
    <div className={`badge ${type ?? ''} ${size ?? ''} gap-2`} {...props}>
      {children}
    </div>
  )
}
