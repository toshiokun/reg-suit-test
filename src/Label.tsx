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
        height: 100,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: primary ? 'orange' : '#adadad',
        background: primary ? 'orange' : '#fff',
        color: primary ? '#fff' : '#363636',
        font: 'italic 14px/100px sans-serif',
      }}
    >
      {children}
    </span>
  )
}
