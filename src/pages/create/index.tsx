'use client'
import 'tailwindcss/tailwind.css'

import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

type Form = {
  id: number,
	title: string,
	latest: string,
}

type Choice = {
  id: string
  title: string | null
  checked: boolean
  color: string
  hoverColor: string
}

const choices: Choice[] = [

]

const makeID = function (): string{
  const id: string = '+++++++++++'
  return id
}

const Create: NextPage = () => {
    const [inputValue, setInputValue] = useState<string | null>(null)

    
    //選択肢の配列
    const [choices, setChoices] = useState<Choice[]>([])

    const loadForm = () => {
    }
  
    const loadChoices = () => {
      setChoices([...choices,
      { id: '1', title: 'Com1', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600' },
      { id: '2', title: 'Com2', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600' },
      { id: '3', title: 'Com3', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600' },
      { id: '4', title: 'Com4', checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600' }
      ]
    )}

  
    useEffect(() => {
      loadChoices()
      loadForm()
      },[])

    useEffect(() => {
    },[inputValue])
    useEffect(() => {
    },[choices])

    const addChoice = (title: string | null) => {
      console.log("addCoice")
      if(title != null){
        setChoices([...choices, {id: makeID(), title: title, checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600' }])
        setInputValue(null)
      }
    };
  
    const deleteChoice = (index: string) => {
      setChoices(
				choices.filter((choices) => (choices.id !== index))
			)
    };
  
    const changeChecked = (choice: Choice) => {
      console.log("changeCompleted")
      if(choice.checked == false){ //選択前
        //console.log("選択した")
        choice.checked = true
        /*choice.color = 'bg-red-500'
        choice.hoverColor = 'bg-blue-600'
        setChoices([...choices, {id: choice.id, title: choice.title, checked: false, color:'bg-gray-400', hoverColor: 'bg-red-600' }])
        */
      }else if(choice.checked == true){ //選択済
        console.log(choice.title)
        choice.checked = false
        /*choice.color = 'bg-gray-400'
        choice.hoverColor = 'bg-red-600'*/
        setChoices(
          choices.filter((choices) => (choice.id !== choice.id))
        )
      }
    };
  
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>
          タイトル
        </h1>
        {choices.map((choice) => (
          <div
            key={choice.id}
            className='flex items-center justify-between bg-gray-200 p-2 rounded mb-2'
          >
            <div className='flex items-center'>
              <input
                type='checkbox'
                checked={choice.checked}
                onChange={() => changeChecked(choice)}
                className='mr-2'
              />
              <p className={`text-black ${choice.checked ? 'line-through' : ''}`}>
                {choice.title}
              </p>
            </div>
            <button
              onClick={() => deleteChoice(choice.id)}
              className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
            >
              削除
            </button>
          </div>
        ))}
        <form
          className='flex items-center mt-4'
        >
          <input
            type='text'
            className='border border-gray-400 px-4 py-2 mr-2 rounded text-black'
            value={inputValue || ''}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='追加したい選択肢を入力してください'
          />
          <Button
            onClick={() => addChoice(inputValue)}
            className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
          >
            追加
          </Button>
        </form>
      </div>
    )
}

export default Create