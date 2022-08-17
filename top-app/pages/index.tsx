import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)
  const [rating, setRating] = useState<number>(4)

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmount');
    }
  })
  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearence='primary' arrow="right" onClick={() => setCounter(x => x + 1)}>Button</Button>
      <Button appearence='ghost' arrow="down">Button</Button>
      <P size='l'>test text</P>
      <P>test text</P>
      <P size='s'>test text</P>
      <Tag size='s'>ghost</Tag>
      <Tag size='m'>ghost</Tag>
      <Tag size='s' color='green'>green</Tag>
      <Tag size='s' color='grey'>gray</Tag>
      <Tag size='s' color='red'>red</Tag>
      <Tag size='s' color='primary' href='3'>primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  )
}
