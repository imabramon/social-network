'use client';
import React from 'react';
import styled from 'styled-components';
import { HStack, NameTitle, Avatar } from '../../shared/ui';
import Button from '../../shared/components/Button';
import withLoggedSwitch from '../../shared/hoc/withLoggedSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { PagePath } from '../../consts/pagePath';
import { logout } from '../../api';
import { logoutUser } from '../../store/actions';

const ButtonNoBorder = Button.Normal.NoBorder.Neutral.Fit;
const ButtonHighlighted = Button.Normal.Highlighted.Action.Fit;
const ButtonHighlightedSmall = Button.Small.Highlighted.Action.Fit;
const ButtonHighlightedNeutral = Button.Normal.Highlighted.Neutral.Fit;

const UnloggedSide = () => {
  const navigate = useNavigate();
  const goToSignUp = () => navigate(PagePath.userSignUp);
  const goToSignIn = () => navigate(PagePath.userSignIn);

  return (
    <HStack width="fit-content" $gap="20px">
      <ButtonNoBorder onClick={goToSignIn}>Sign In</ButtonNoBorder>
      <ButtonHighlighted onClick={goToSignUp}>Sign Up</ButtonHighlighted>
    </HStack>
  );
};
const UserData = () => {
  const name = useSelector((state) => state.userData.username);
  const avatarUrl = useSelector((state) => state.userData.image);
  const navigate = useNavigate();
  return (
    <HStack width="fit-content" $gap="15px" $alignItems="center">
      <NameTitle
        onClick={() => {
          navigate(PagePath.userEdit);
        }}
      >
        {name}
      </NameTitle>
      <Avatar src={avatarUrl} />
    </HStack>
  );
};

const LoggedSide = () => {
  const navigate = useNavigate();
  const goToCreateArticle = () => navigate(PagePath.createArticle);
  const dispatch = useDispatch();

  return (
    <HStack width="fit-content" $gap="20px" $alignItems="center">
      <ButtonHighlightedSmall onClick={goToCreateArticle}>Create article</ButtonHighlightedSmall>
      <UserData />
      <ButtonHighlightedNeutral
        onClick={() => {
          logout();
          dispatch(logoutUser());
          navigate(PagePath.feed)
        }}
      >
        Log Out
      </ButtonHighlightedNeutral>
    </HStack>
  );
};

const Header = ({}) => {
  const navigate = useNavigate()
  return (
    <HeaderStl>
      <HStack $justifyContent="space-between" $alignItems="center">
        <span onClick={()=>{navigate(PagePath.feed)}}>Realworld Blog</span>
        {withLoggedSwitch(LoggedSide, UnloggedSide)}
      </HStack>
    </HeaderStl>
  );
};

export const HeaderStl = styled.div`
  padding: 16px 25px;
`;

export default Header;
