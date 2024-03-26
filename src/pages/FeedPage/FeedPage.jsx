"use client";
import React, { useEffect } from 'react';
import styled from 'styled-components';

const FeedPage = () => {
	useEffect(()=>{
		console.log('call')
	}, [])
	return (
		<FeedPageStl>
 			FeedPage works!
 		</FeedPageStl>
	);
};

export const FeedPageStl = styled.div``;
export default FeedPage;

