import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Button from '@mui/material/Button';
import { Box, Grid, Stack } from '@mui/material';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Form = {
	id: number,
	title: string,
	latest: string,
}


const forms: Form[] = [
{id: 1, title: 'title1', latest:'2024/2/20'},
{id: 2, title: 'title1', latest:'2024/2/20'},
]

const Use: NextPage = () => {

	const updateForm = () => {
		console.log("更新")
	}

	return (
		<div>
			<Header 
				title='use'/>
			
			<div className='text-right mx-2 bg-blue-400 rounded-t-lg'>
				<Button
						className='bg-green-500 hover:bg-green-600 text-white px-4 mx-2 my-1 rounded'
					>追加
				</Button>
			</div>
			<div className='text-right mx-2 bg-blue-200 py-2 px-1 rounded-b-lg'>
				
				{forms.map((form) => (
					<div
					className='flex bg-white border rounded-lg p-1'
						key={form.id}
						>
						<Button className="flex justify-between bg-gray-200 w-full content-center h-10 rounded-lg"
								onClick={() => updateForm()}
								href="/create"
						>
							<p>
							{form.id}
							</p>
							<p>
							{form.latest}
							</p>
							<p>
							{form.title}
							</p>
						</Button>
						
						<Button
							className='bg-red-500 h-10  rounded-lg'
							variant="contained"
							color="error"
							onClick={() => '削除処理'}
							>
							削除
						</Button>
						<Button
							className='bg-blue-500 hover:bg-blue-600 h-10 rounded-lg'
							variant="contained"
							color="error"
							onClick={() => '削除処理'}
							>
							QRコードをダウンロード
						</Button>
					</div>
				))}
			</div>
			
			<Footer />
		</div>
	)
}

export default Use