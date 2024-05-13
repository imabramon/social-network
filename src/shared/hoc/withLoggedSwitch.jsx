'use client'

import React from 'react'
import { useSelector } from 'react-redux'

const withLoggedSwitch = (Logged, Unlogged) => {
  const isLogged = useSelector((state) => state.userData.logged)
  if (isLogged) return <Logged />
  return <Unlogged />
}

export default withLoggedSwitch
