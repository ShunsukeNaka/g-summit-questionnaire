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



  const choices: Choice[] = [
	/*{ id: 1, title: 'Com1', checked: false, rank: 0 },
	{ id: 2, title: 'Com2', checked: false, rank: 0 },
	{ id: 3, title: 'Com3', checked: true, rank: 0 },
	{ id: 4, title: 'Com4', checked: true, rank: 0 },*/
  ]

  const pushChoice: PushChoice[] = [{
	id: 1, title: 'Com1', rank: 0
  }]


let btnColor = 'bg-green-500'
const formInfo: Form = {id: 0, title: '', latest: ''}

const Use: NextPage = () => {
	//選択肢の配列
	const [choices, setChoices] = useState<Choice[]>([])
	//投票する選択肢(Choice)
	const [choiceId, setChoiceId] = useState<PushChoice[]>([])
	//投票ボタンを押せるか判定
	const [canPush, setCanPush] = useState(true)



	let query = [
		{
			votedId: 0,
			votedName: '',
		}
	]
	const router = useRouter();

	// 投票結果を送信
	const clickVote = (votedChoice:PushChoice[]) => {
		console.log(votedChoice)

		//POST_VOTE(votedChoice)
		router.push({ pathname: "voted", query: query[0] }, "voted");
	}

	let groupId : number = 0
	if ( router.query.id != null){
		 groupId = Number(router.query.id)
		}
	let groupName = (router.query.name)?.toString()

	if (groupName == null)
	{
		groupName = ''
	}
	

	const clickChoice = (clickedChoice: Choice) => {
		if(clickedChoice.checked == false){ //選択前
			//console.log("選択した")
			clickedChoice.checked = true
			clickedChoice.color = 'bg-red-500'
			clickedChoice.hoverColor = 'bg-blue-600'
			setChoiceId([...choiceId, {id: clickedChoice.id, title: clickedChoice.title, rank: 1}])
		}else if(clickedChoice.checked == true){ //選択済
			console.log(clickedChoice.title)
			clickedChoice.checked = false
			clickedChoice.color = 'bg-gray-400'
			clickedChoice.hoverColor = 'bg-red-600'
			setChoiceId(
				choiceId.filter((choiceId) => (choiceId.id !== clickedChoice.id))
			)
		}
	}

	
	const loadForm = () => {
		formInfo.title = 'タイトル仮'
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
		console.log("useEffectChoice" + choiceId.length)
		if(choiceId.length != 1){
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
		
	
	return (
		<div>
			<VoteHeader
				userId=''
				invitedGroup={groupName}
			/>
			<div>
				<h1 className='text-center text-3xl font-bold mx-6 bg-orange-400 rounded-t-lg'>{formInfo.title}</h1>
			</div>
			<div className='text-center mx-6 py-1 pt-6 bg-orange-200 rounded-b-lg'>
				{choices.map((choice) => (
					groupId != choice.id &&
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
				
					{choiceId.map((form) => (
						<p
						className='text-3xl font-bold'
						key={form.id}
						>
							{form.title}
						</p>
					))}
				<Button
					className={btnColor + ' hover:bg-green-600 text-white px-4 py-2 mt-8 rounded'}
					onClick={() => clickVote(choiceId)}
					disabled={canPush}
				>投票する
				</Button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Use