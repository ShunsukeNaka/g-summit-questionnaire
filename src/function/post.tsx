import { useState } from 'react'
import { supabase } from "@/utils/supabase/supabase"

import styles from '@/styles/Home.module.css'

export default function post() {

  const [content, setContent] = useState<string>('')

  const submitPost = async () => {
    // 入力が空の場合は知らせる
    if (content === '') {
      alert('テキストが空です')
      return
    }
    try {
      // POSTリクエストを送信
      const response = await fetch('/api/voted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      const data = await response.json();
      if (response.ok) {
        // POSTが成功した場合の処理
        setContent('')
        console.log('投稿に成功しました！')
      } else {
        // POSTが失敗した場合の処理
        console.error(response.statusText, data.message);
      }
    } catch (error) {
      // エラーハンドリング
      console.error(error);
    }
  }

  return submitPost()
}

export function postForm(FORMID: number, TITLE: string) {
   /* const [formid, setFormId] = useState(0);
    const [title, setTitle] = useState("");

    setFormId(FORMID)
    setTitle(TITLE)*/
    console.log('Invite')

    const func = async (/*e: React.MouseEvent<HTMLElement, MouseEvent>*/) => {
      console.log('In')
        
        try {
            let { data, error } = await supabase
              .from('forms')
              .insert([
                {FormId: FORMID, title: TITLE }
              ])
              .select()
              console.log('成功')
            if (error) {
                console.log(error)
            }
        }catch (error) {
            console.log(error)
        }
    }
    
    return func()
}
/*
export  function POST_VOTE(contents :PushChoice[]){

    const func = async () => {
        contents.map((_content) => (
              // 入力が空の場合は知らせる
    if (contents[].id === null) {
        alert('テキストが空です')
        return
      }
      try {
        // POSTリクエストを送信
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ contents }),
        });
        const data = await response.json();
        if (response.ok) {
          // POSTが成功した場合の処理
          console.log('投稿に成功しました！')
        } else {
          // POSTが失敗した場合の処理
          console.error(response.statusText, data.message);
        }
      } catch (error) {
        // エラーハンドリング
        console.error(error);
      }
        ))
      
    }
    return func()
}
*/