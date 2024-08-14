import { ReactNode } from 'react'

interface ButtonProps {
   theme: 'light' | 'dark'
   children: ReactNode
   onClick?: () => void
   type?: 'button' | 'submit' | 'reset'
}

function Button({ theme, onClick, children, type = 'button' }: ButtonProps) {
   return (
      <button
         onClick={onClick}
         type={type}
         className={`btn
               ${
                  theme === 'light'
                     ? 'border-primary  hover:bg-slate-200'
                     : 'border-secondary hover:bg-slate-800'
               }
               `}
      >
         {children}
      </button>
   )
}

export default Button
