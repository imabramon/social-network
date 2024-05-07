'use client'

import React from 'react'
import styled from 'styled-components'
import SignInForm from '../../forms/SignInForm'

function SignInPage({}) {
  return (
    <SignInPageStl>
      <SignInForm />
    </SignInPageStl>
  )
}

export const SignInPageStl = styled.div`
  width: 384px;
  height: fit-content;
  margin-top: 30px;
`

export default SignInPage
