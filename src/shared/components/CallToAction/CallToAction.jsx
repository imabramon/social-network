'use client'

import React from 'react'
import { Link, Paragraph, SubText } from '../../ui'

function CallToAction({ call, action, to }) {
  return (
    <Paragraph fontSize="12px">
      <SubText>{call}</SubText>
      <Link to={to}>{action}</Link>
    </Paragraph>
  )
}

export default CallToAction
