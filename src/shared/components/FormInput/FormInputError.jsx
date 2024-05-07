import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  font-size: 14px;
  color: #f5222d;
  line-height: 22px;
`

export function FormInputError({ error, children }) {
  if (!error) return null

  return <Span>{children}</Span>
}
