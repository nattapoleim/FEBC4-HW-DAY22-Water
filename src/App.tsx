import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from './components/Button'
import ThemeToggler from './components/ThemeToggler'
import formatNumber from './utils/formatNumber'

interface FromTypes {
   weight: number
}

function App() {
   const { register, handleSubmit } = useForm<FromTypes>()
   const [theme, setTheme] = useState<'light' | 'dark'>('light')
   const [water, setWater] = useState<string>('')

   const onsubmit: SubmitHandler<FromTypes> = data => {
      // ดึงค่า weight มาจาก object data
      const { weight } = data

      // คำนวนหาผลลัพท์
      const result = weight * 2.2 * (30 / 2)

      // format ทศนิยม ให้เป็น 2 ตำแหน่ง
      const formatResult = result.toFixed(2)

      // ใช้ฟังก์ชั่น formatNumber เพิ่มเติมลูกน้ำตามตำแหน่ง และเซ็ตค่าเข้าไปใน state
      setWater(formatNumber(formatResult))
   }

   return (
      <main
         className={`relative h-svh w-screen transition-all duration-300
         ${theme === 'light' ? 'bg-secondary text-primary' : 'text-secondary bg-primary'}
      `}
      >
         <header className='absolute top-5 right-5'>
            <ThemeToggler theme={theme} setTheme={setTheme} />
         </header>

         <section className='flex items-center justify-center flex-col h-full gap-10'>
            <h1 className='text-5xl font-medium'>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <p className='text-5xl font-medium'>{water ? water : 'x'} มล.</p>
            <form onSubmit={handleSubmit(onsubmit)} className='grid gap-4'>
               <input
                  {...register('weight')}
                  type='number'
                  placeholder='น้ำหนักของคุณ (กิโลกรัม)'
                  id='weight'
                  className={`border  px-6 py-4 min-w-96 text-center text-xl transition-all duration-300
                     ${
                        theme === 'light'
                           ? 'focus:outline-primary'
                           : 'focus:outline-secondary bg-primary border-slate-600'
                     }
                     `}
               />
               <Button type='submit' theme={theme}>
                  คำนวน
               </Button>
            </form>
         </section>
      </main>
   )
}

export default App
