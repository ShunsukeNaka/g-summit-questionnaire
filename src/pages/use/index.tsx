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

const Use: NextPage = () => {

	const updateForm = () => {
		console.log("更新")
	}

	return (
		<div>
			<h1 className='text-3xl font-bold mb-4'>This is About Page</h1>
			<div className='text-right'>
				<Button
					className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
				>追加
				</Button>
				{forms.map((form) => (
					<div
					className='flex'
						key={form.id}
						>
						<Button className="flex justify-between bg-gray-200 p-2 rounded mb-2 w-full content-center h-10"
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
							className='bg-red-500 h-10'
							variant="contained"
							color="error"
							onClick={() => '削除処理'}
							>
							削除
						</Button>
						<Button
							className='bg-blue-500 hover:bg-blue-600 h-10'
							variant="contained"
							color="error"
							onClick={() => '削除処理'}
							>
							QRコードをダウンロード
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Use