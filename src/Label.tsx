import { FC, PropsWithChildren } from 'react'

interface Props {
  primary?: boolean
}

export const Label: FC<Props> = ({
  children,
  primary,
}: PropsWithChildren<Props>) => {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0 3em',
        height: 55,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: primary ? 'red' : '#adadad',
        background: primary ? 'red' : '#fff',
        color: primary ? '#fff' : '#363636',
        font: 'normal 14px/55px sans-serif',
      }}
    >
      {children}
    </span>
  )
}
