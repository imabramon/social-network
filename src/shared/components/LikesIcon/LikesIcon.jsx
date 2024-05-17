'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { HiddenSpan, SubText } from '../../ui'
import { withProps } from '../../utils/withProps'

const Sup = styled.sup`
  ${SubText}
`

const Icon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${withProps('$bg')};
  align-self: center;
  cursor: pointer;
`

function LikesIcon({ value, isLiked = false, onLike, onUnlike }) {
  const [liked, setLiked] = useState(isLiked)
  const isLogged = useSelector((state) => state.userData.logged)
  return (
    <LikesIconStl>
      <HiddenSpan>Likes count</HiddenSpan>
      <Icon
        $bg={liked ? "url('/like__liked.svg')" : "url('/like.svg')"}
        onClick={() => {
          if (!isLogged) {
            toast('Вы не авторизованы')
            return
          }

          if (liked) {
            onUnlike().then((res) => res && setLiked(false))
            return
          }

          onLike().then((res) => res && setLiked(true))
        }}
      />
      <Sup>{value}</Sup>
    </LikesIconStl>
  )
}

export const LikesIconStl = styled.span`
  display: inline-flex;
  gap: 5px;
`

export default LikesIcon
