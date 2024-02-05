const camelCaseToWords = (string: string) => {
  const result = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const isBoolean = (value: any) => 'boolean' === typeof value;
const isString = (value: any) => 'string' === typeof value;
const isObject = (value: any) => 'object' === typeof value;

const getTypeAndReturnAnswer = (value: any) => {
  if (isBoolean(value)) {
    return value ? 'Yes' : 'No';
  } else {
    return String(value)
  }
}


const ModalElement = ({title, answer}: any) => {
  // const convertTitle = qTitle.replace(/([A-Z])/g, " $1");
  // const titleToUpperCase = convertTitle.charAt(0).toUpperCase() + convertTitle.slice(1);

  console.log(answer)
  console.log(typeof answer)

  return (
    <div>{camelCaseToWords(title)} : {getTypeAndReturnAnswer(answer)}</div>
  )
}

export default ModalElement
