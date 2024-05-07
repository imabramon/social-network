'use client'

import React from 'react'
import styled from 'styled-components'
import SignUpForm from '../../forms/SignUpForm'

function SignUpPage({}) {
  return (
    <SignUpPageStl>
      <SignUpForm />
    </SignUpPageStl>
  )
}

export const SignUpPageStl = styled.div`
  width: 384px;
  height: fit-content;
  margin-top: 30px;
`

export default SignUpPage
