import { useState } from "react";

export const HeaderTopDarkmodeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return <div>Hello World</div>;
};
