import { type FC } from 'react';

interface Test {
  props: {
    text: string
  }
}

export const NewLineText: FC<Test> = ({props}) => {
  const text = props.text
  return (
    text.split('\n').map(
      (text) => <div key={text}>{text}</div>
    )
  )
}
