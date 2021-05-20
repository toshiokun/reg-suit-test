import { FC, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
interface Props {
  primary?: boolean
}

export const Label: FC<Props> = ({
  children,
  primary,
}: PropsWithChildren<Props>) => {
  return <Body primary={primary}>{children}</Body>
}

const Body = styled.span`
  display: inline-block;
  padding: 0 3em;
  height: 55;
  border-style: solid;
  border-width: 1px;
  border-color: #adadad;
  background: #fff;
  color: #363636;
  font: normal 14px/55px sans-serif;

  ${(props: any) =>
    props.primary &&
    css`
      border-color: red;
      background: red;
      color: #fff;
    `}
`
