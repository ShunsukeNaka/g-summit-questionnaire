import styles from '../../styles/global.module.css'
import type { NextPage } from 'next'

type Form = {
	id: number,
	title: string,
	latest: string,
}

const forms: Form[] = [
{id: 1, title: 'title1', latest:'2024/2/20'}
]

const Use: NextPage = () => {
	return (
		<div>
			<h1>This is About Page</h1>
			<div>
				{forms.map((form) => (
					<div
					key={form.id}
					className=''>
						<div
						className={styles.cell}>
							<p>
							{form.title}
							</p>
							<button
							onClick={() => '削除処理'}
							className=''
							>
							削除
							</button>
						</div>
					</div>
				))}
			</div>
			
		</div>
		
	)
}

export default Use