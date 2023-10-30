export const NewLineText = (props: { text: string }) => {
  const text = props.text
  return (
    text.split('<br />').map(
      (string: string, index: number, ) =>
        <div key={ index }>{ string }</div>
    )
  )
}
