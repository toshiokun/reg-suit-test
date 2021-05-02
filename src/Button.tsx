import React, { FC, PropsWithChildren } from 'react'

interface Props {
  primary?: boolean
}

export const Button: FC<Props> = ({
  children,
  primary,
}: PropsWithChildren<Props>) => {
  return (
    <button
      style={{
        display: 'inline-block',
        padding: '0 2em',
        height: 100,
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: primary ? 'red' : '#adadad',
        background: primary ? 'red' : '#fff',
        color: primary ? '#fff' : '#363636',
        font: 'normal 16px/50px sans-serif',
        textRendering: 'optimizeLegibility',
      }}
    >
      {children}
    </button>
  )
}
