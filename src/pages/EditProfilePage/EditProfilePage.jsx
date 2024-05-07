'use client'

import React from 'react'
import styled from 'styled-components'

import EditProfileForm from '../../forms/EditProfileForm'

function EditProfilePage({}) {
  return (
    <EditProfilePageStl>
      <EditProfileForm />
    </EditProfilePageStl>
  )
}

export const EditProfilePageStl = styled.div`
  width: 384px;
  height: fit-content;
  margin-top: 30px;
`

export default EditProfilePage
