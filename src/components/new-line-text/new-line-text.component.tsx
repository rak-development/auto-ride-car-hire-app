import { type FC } from 'react'

interface Test {
  text: string
}

export const NewLineText: FC<Test> = ({ text }) =>
  text.split('\n').map((text) => <div key={text}>{text}</div>)
