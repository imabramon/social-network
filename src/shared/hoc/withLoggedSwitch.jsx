'use client'

import React from 'react'
import { useSelector } from 'react-redux'

const withLoggedSwitch = (Logged, Unlogged) => {
  const isLogged = useSelector((state) => state.logged)
  if (isLogged) return <Logged />
  return <Unlogged />
}

export default withLoggedSwitch
