import { type FC } from 'react'

interface NewLineTextProps {
  text: string
}

export const NewLineText: FC<NewLineTextProps> = ({ text }) =>
  text.split('\n').map((text) => <div key={text}>{text}</div>)
