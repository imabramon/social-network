"use client";
import React from 'react';
import { Link, Paragraph, SubText } from '../../ui';

const CallToAction = ({call, action, to}) =>
	(<Paragraph fontSize='12px'>
		<SubText>{call}</SubText>
		<Link to={to}>{action}</Link>
	</Paragraph>)


export default CallToAction;