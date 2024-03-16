import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Button from '@mui/material/Button';
import { Box, Grid, Stack } from '@mui/material';
import { Component, useEffect, useState } from 'react';
import Header from '@/components/Header';
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

  type PushChoice = {
	id: number
	title: string
	rank: number
  }
  
  const choices: Choice[] = [
	/*{ id: 1, title: 'Com1', checked: false, rank: 0 },
	{ id: 2, title: 'Com2', checked: false, rank: 0 },
	{ id: 3, title: 'Com3', checked: true, rank: 0 },
	{ id: 4, title: 'Com4', checked: true, rank: 0 },*/
  ]

  const pushChoice: PushChoice[] = [{
	id: 1, title: 'Com1', rank: 0
  }]

  const clickVote = (choiceId: Number) => {
	console.log(choices)
}


let btnColor = 'bg-green-500'
const formInfo: Form = {id: 0, title: '', latest: ''}

const choiceGroup: NextPage = () => {
	//選択肢の配列
	const [choices, setChoices] = useState<Choice[]>([])
	//自分のグループId
	const [choiceId, setChoiceId] = useState<number>(0)
    //自分のグループName
    const [choiceName, setChoiceName] = useState<String>('404')
	//投票ボタンを押せるか判定
	const [canPush, setCanPush] = useState(true)


	const clickChoice = (clickedChoice: Choice) => {
        choices.map((choice) =>(
            choice.color = 'bg-gray-400',
			choice.hoverColor = 'bg-red-600'
        ))
		
			//console.log("選択した")
			clickedChoice.checked = true
			clickedChoice.color = 'bg-red-500'
			clickedChoice.hoverColor = 'bg-blue-600'
			setChoiceId(clickedChoice.id)
            setChoiceName(clickedChoice.title)
	}

	
	const loadForm = () => {
		formInfo.title = 'あなたのチームを選択してください'
	}

	const loadChoices = () => {
		setChoices([...choices, 
		{ id: 1768, title: 'Com1', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600', rank: 0 },
		{ id: 2765, title: 'Com2', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600',rank: 0 },
		{ id: 3245, title: 'Com3', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600',rank: 0 },
		{ id: 4086, title: 'Com4', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600',rank: 0 }
		]
	)}


	useEffect(() => {
		loadChoices()
		loadForm()
		},[])

	useEffect(() => {
		console.log("useEffectChoice" + choiceId)
		if(choiceId == 0){
			setCanPush(true)
			btnColor = 'bg-gray-400'
		} else {
			setCanPush(false)
			btnColor = 'bg-green-500'
		}

		//送信処理

	},[choiceId])

	useEffect(() => {
	},[canPush])



    let query = {
        id: 0,
        name: '',
    };
    
    const router = useRouter();
	const nextPage = () => {
        if(query.name == '' )
        {
            query.name = '404'
        }

        query.id = choiceId
        query.name = choiceName.toString()

		router.push({ pathname: "vote", query: query }, "vote");
	};
		
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
				{choices.map((choice) => (
					<div
					className='flex mx-4 px-1 py-1 bg-white rounded'
						key={choice.id}
						>
						<Button className={'flex justify-between ' + choice.color + ' hover:' + choice.hoverColor + ' text-white p-2 w-full content-center h-10'}
								onClick={() => clickChoice(choice)}
								typeof='submit'
						>
							<p>
							{choice.title}
							</p>
						</Button>
					</div>
				))}
				<div
					className='text-center'
				>
				
					{choiceId.toString()}
				<Button
					className={btnColor + ' hover:bg-green-600 text-white px-4 py-2 mt-8 rounded'}
					onClick={() => nextPage()}
					disabled={canPush}
				>決定
				</Button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default choiceGroup