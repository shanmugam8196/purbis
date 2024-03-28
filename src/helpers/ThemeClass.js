import { useEffect } from "react";

export default function ThemeClass(name) {
  useEffect(() => {
    document.body.classList.add(name)
    return () => {
      document.body.classList.remove(name)
    }
  }, []);
  return null;
}