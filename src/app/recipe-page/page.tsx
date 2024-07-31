
import localFont from 'next/font/local'
import Image from 'next/image'

//fonts
const youngSerifRegular = localFont({
  src: '../../../public/recipe-page/fonts/young-serif/YoungSerif-Regular.ttf',
  variable: '--font-young-serif-regular'
})
const outfit = localFont({
  src: '../../../public/recipe-page/fonts/outfit/Outfit-VariableFont_wght.ttf',
  variable: '--font-outfit'
})

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-stone-100 h-[100vh] w-[100vw] flex justify-center items-start pt-[150px]'>
      <div className='bg-white-100 h-auto w-[735px] rounded-2xl'>
        <div className='flex-col justify-center items-center p-10'>
          <Image alt=';' src='/recipe-page/images/image-omelette.jpeg' width={658} height={324} className='rounded-2xl' />
          < div className='py-10' >
            <p className={`${youngSerifRegular.className} text-black text-[40px]`}>Simple Omelette Recipe</p>
          </div >
        </div>
      </div>
    </div>
  )
}

export default page

