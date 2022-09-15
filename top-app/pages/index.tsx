import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button, Htag, Input, P, Rating, Tag } from '../components'
import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/Layout'

function Home({ menu }: MenuProps): JSX.Element {
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
      <Input />
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<MenuProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface MenuProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
