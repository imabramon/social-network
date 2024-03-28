"use client";
import React from 'react';
import { Link, Paragraph, SubText } from '../../ui';

const CallToAction = ({call, action, actionLink}) =>
	(<Paragraph fontSize='12px'>
		<SubText>{call}</SubText>
		<Link>{action}</Link>
	</Paragraph>)


export default CallToAction;