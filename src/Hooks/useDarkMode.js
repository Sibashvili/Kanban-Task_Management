import React, { useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "light";
  useEffect(() => {
    const root = 
  }, []);
}

export default useDarkMode;
