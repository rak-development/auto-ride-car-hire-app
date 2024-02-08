import { format } from "date-fns";

const camelCaseToWords = (string: string) => {
  const result = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const isBoolean = (value: string) => 'boolean' === typeof value;
const isObject = (value: string) => 'object' === typeof value;

const getTypeAndReturnAnswer = (value: string) => {
  if (isBoolean(value)) {
    return value ? 'Yes' : 'No';
  } else if (isObject(value)) {
    return format(value, 'PPPppp');
  } else {
    return String(value)
  }
}

interface ModalElementProps {
  title: string;
  answer: string;
}

const ModalElement = ({title, answer}: ModalElementProps) => <div>{camelCaseToWords(title)} : {getTypeAndReturnAnswer(answer)}</div>

export default ModalElement
