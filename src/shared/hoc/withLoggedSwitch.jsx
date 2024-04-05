'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const withLoggedSwitch = (Logged, Unlogged) => {
  const isLogged = useSelector((state) => state.logged);
  if (isLogged) return <Logged />;
  return <Unlogged />;
};

export default withLoggedSwitch;
