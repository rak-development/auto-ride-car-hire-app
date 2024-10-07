import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'

import { ThemeContext } from "../../../../context/theme-context";
import { ThemeContextType } from "../../../../types/theme-context-types";

const ButtonSwitch = styled(Button)`
  background-color: var(--bs-gray-100);
  border: none;

  :hover {  
    background-color: var(--bs-btn-hover-bg);
  }
`

export const HeaderTopDarkModeSwitch = ({test}: any) => {

  const { setThemeMode } = useContext(ThemeContext) as ThemeContextType;

  // console.log('HeaderTopDarkModeSwitch')
  // console.log(test)
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const theme = useContext(test);
  // console.log('themeMode: ', themeMode)

  // const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
  //   e.preventDefault();
  //   saveTodo(formData);
  // };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setThemeMode(!isDarkMode ? 'dark' : 'light');
    const htmlElement = document.querySelector('html');
    if (htmlElement === null) return
    htmlElement.setAttribute('data-bs-theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <ButtonSwitch variant="primary" onClick={toggleDarkMode}>
    {isDarkMode ? '🌙' : '🔆'}
  </ButtonSwitch>
  )
};
