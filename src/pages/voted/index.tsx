import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import VoteHeader from '@/components/VoteHeader';
import { useRouter } from 'next/router';

type Form = {
	id: number,
	title: string,
	latest: string,
}

type Choice = {
	id: number
	title: string
	checked: boolean
	color: string
	hoverColor: string
	rank: number
}

let btnColor = 'bg-green-500'
const formInfo: Form = {id: 0, title: '', latest: ''}

const Use: NextPage = () => {
	//選択肢の配列
	const [choices, setChoices] = useState<Choice[]>([])
	//投票ボタンを押せるか判定
	const [canPush, setCanPush] = useState(true)

    const router = useRouter();
	
	const loadForm = () => {
		formInfo.title = 'タイトル仮'
	}

	const loadChoices = () => {
		setChoices([...choices, 
		{ id: 1, title: 'Com1', checked: true, color:'bg-gray-400', hoverColor: 'bg-red-600', rank: 0 },
		{ id: 2, title: 'Com2', checked: true, color:'bg-gray-400', hoverColor: 'bg-red-600',rank: 0 },
		{ id: 3, title: 'Com3', checked: true, color:'bg-gray-400', hoverColor: 'bg-red-600',rank: 0 },
		{ id: 4, title: 'Com4', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600',rank: 0 }
		])  
    }

	useEffect(() => {
		loadChoices()
		loadForm()
		},[])

	useEffect(() => {
	},[canPush])
		
	return (
		<div>
			<VoteHeader
				userId=''
				invitedGroup=''
			/>
			<div>
				<h1 className='text-center text-3xl font-bold mx-6 bg-orange-400 rounded-t-lg'>{formInfo.title}</h1>
			</div>
			<div className='text-center mx-6 py-1 pt-6 bg-orange-200 rounded-b-lg'>
				{choices.map((choiced) => (
                    
					<div
					className='flex mx-4 px-1 py-1 bg-white rounded'
						key={choiced.id}
						>
                           { choiced.checked && (
                            <p>
                                {choiced.title}
                            </p>
                           )}
					</div>
				))}
			</div>
			<Footer />
		</div>
	)
}

export default Use