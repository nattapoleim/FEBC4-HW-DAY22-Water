import { Moon, Sun } from 'lucide-react'
import Button from './Button'

interface ThemeTogglerProps {
   theme: 'light' | 'dark'
   setTheme: (theme: 'light' | 'dark') => void
}

function ThemeToggler({ theme, setTheme }: ThemeTogglerProps) {
   const toggleTheme = () => {
      if (theme === 'light') {
         setTheme('dark')
      } else {
         setTheme('light')
      }
   }

   return (
      <Button theme={theme} onClick={toggleTheme}>
         {theme === 'light' ? (
            <>
               <Sun /> <span>Light</span>
            </>
         ) : (
            <>
               <Moon /> <span>Dark</span>
            </>
         )}
      </Button>
   )
}

export default ThemeToggler
