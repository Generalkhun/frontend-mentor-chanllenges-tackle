
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
    <div className='bg-recipe-page-stone-100 h-[100vh] w-[100vw] flex justify-center items-start pt-[150px]'>
      <div className='bg-recipe-page-white-100 h-auto w-[735px] rounded-2xl'>
        <div className='flex-col justify-center items-center p-10'>
          <Image alt=';' src='/recipe-page/images/image-omelette.jpeg' width={658} height={324} className='rounded-2xl' />
          < div className='py-5' >
            <p className={`${youngSerifRegular.className} text-recipe-page-stone-900 text-[40px]`}>Simple Omelette Recipe</p>
          </div >
          <p className={`${outfit.className} text-recipe-page-stone-600 text-[16px]`}>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <div className='mt-10 bg-recipe-page-rose-50 h-[180px] w-[660px] rounded-2xl'>
            <p className={`${outfit.className} text-recipe-page-rose-800`}>Preparation time</p>
            <ul className='leading-10 pl-5 list-disc'>
              <li>Total: Approximately 10 minutes</li>
              <li>Preparation: 5 minutes </li>
              <li>Cooking: 5 minutes  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

