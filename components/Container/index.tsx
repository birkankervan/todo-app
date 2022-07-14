import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system'

type ContainerProps = {
  children: ReactNode
  hidden?: boolean
} & BoxStyledProps &
  HTMLAttributes<HTMLDivElement>

type BoxStyledProps = SpaceProps & LayoutProps & PositionProps & FlexboxProps

function Container({ children, hidden = false, ...props }: ContainerProps) {
  if (hidden) {
    return null
  }
  return <Box {...props}>{children}</Box>
}

const Box = styled.div<BoxStyledProps>`
  ${flexbox}
  ${position}
  ${space}
  ${layout}
`

export default Container
