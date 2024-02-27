import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { title } from 'process';


export type VoteHeaderProps = {
	userId: string
    invitedGroup: string
};

export const VoteHeader = ({userId,invitedGroup}: VoteHeaderProps) => {

	return (
		<Box sx={{ flexGrow: 1 }}
			className="pb-8">
		  <FormGroup>
		  </FormGroup>
		  <AppBar position="static">
			<Toolbar>
			  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
			  			  className='font-bold'>
				あなたは {userId} さんです。<br />
                グループは {invitedGroup} です。
			  </Typography>
			</Toolbar>
		  </AppBar>
		</Box>
	  );
}

export default VoteHeader