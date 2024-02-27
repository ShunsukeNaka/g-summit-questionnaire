import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Button from '@mui/material/Button';
import { Box, Grid, Stack } from '@mui/material';

type Form = {
	id: number,
	title: string,
	latest: string,
}


const forms: Form[] = [
{id: 1, title: 'title1', latest:'2024/2/20'},
{id: 2, title: 'title1', latest:'2024/2/20'},
]

export const Footer: NextPage = () => {


	return (
		<div className='absolute bottom-0 bg-slate-500 w-full'>
		 　
		</div>
	)
}

export default Footer