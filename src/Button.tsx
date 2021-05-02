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
        padding: '0 3em',
        height: 55,
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: primary ? 'orange' : '#adadad',
        background: primary ? 'orange' : '#fff',
        color: primary ? '#fff' : '#363636',
        font: 'italic 14px/50px sans-serif',
        textRendering: 'optimizeLegibility',
      }}
    >
      {children}
    </button>
  )
}
