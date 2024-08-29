import { useState } from "react";
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'

const ButtonSwitch = styled(Button)`
  background-color: var(--bs-gray-100);
`

export const HeaderTopDarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
