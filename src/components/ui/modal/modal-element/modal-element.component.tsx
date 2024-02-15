interface ModalElementProps {
  title: string
  answer: string
}

const ModalElement = ({ title, answer }: ModalElementProps) => (
  <div>
    {title} : {answer}
  </div>
)

export default ModalElement
