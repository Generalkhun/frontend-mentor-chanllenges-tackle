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

const page = () => {
  return (
    <div className='bg-recipe-page-stone-100 h-full w-[100vw] flex justify-center items-start sm:pt-[150px] sm:pb-[100px]'>
      <div className='bg-recipe-page-white-100 h-auto w-[735px] rounded-2xl'>
        <div className='sm:pt-10 sm:px-10'>
          <div className='w-max-[658px] w-full sm:h-[324px] h-[170px] relative'>
            <Image alt=';' src='/recipe-page/images/image-omelette.jpeg' objectFit='cover' fill className='sm:rounded-2xl rounded-none' />
          </div>
        </div>

        <div className='flex-col justify-center items-center px-7 sm:px-10 sm:pt-10 pb-10 '>
          < div className='py-5' >
            <p className={`${youngSerifRegular.className} text-recipe-page-stone-900 text-[31px] sm:text-[40px]`}>Simple Omelette Recipe</p>
          </div >
          <p className={`${outfit.className} text-recipe-page-stone-600 text-[16px]`}>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <div className='mt-10 bg-recipe-page-rose-50 min-h-[180px] rounded-2xl p-5'>
            <p className={`${outfit.className} text-recipe-page-rose-800 text-xl font-semibold mb-3`}>Preparation time</p>
            <ul className='leading-6 pl-5 list-disc'>
              <li className='mb-2 pl-5'><span className='font-bold text-recipe-page-stone-900'>Total:</span> Approximately 10 minutes</li>
              <li className='mb-2 pl-5'><span className='font-bold text-recipe-page-stone-900'>Preparation:</span> 5 minutes </li>
              <li className='mb-2 pl-5'><span className='font-bold text-recipe-page-stone-900'>Cooking:</span> 5 minutes  </li>
            </ul>
          </div>
          <div className='mb-5 mt-5'>
            <p className={`${youngSerifRegular.className} text-recipe-page-brown-800 text-[30px]`}>Ingredients</p>
            <ul className='leading-10 pl-5 list-disc'>
              <li>&emsp; 2-3 large eggs</li>
              <li>&emsp; Salt, to taste</li>
              <li>&emsp; Pepper, to taste  </li>
              <li>&emsp; 1 tablespoon of butter or oil  </li>
            </ul>
          </div>
          <hr />
          <div className='mt-5 mb-8'>
            <p className={`${youngSerifRegular.className} text-recipe-page-brown-800 text-[30px]`}>Instructions</p>
            <ul className='leading-6 pl-5 list-decimal'>
              <li className='mb-5 pl-5'><span className='font-bold text-recipe-page-stone-900'>Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li className='mb-5 pl-5'><span className='font-bold text-recipe-page-stone-900'>Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li className='mb-5 pl-5'><span className='font-bold text-recipe-page-stone-900'>Cook the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
              <li className='mb-5 pl-5'><span className='font-bold text-recipe-page-stone-900'>Add fillings (optional):  </span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li className='mb-5 pl-5'><span className='font-bold text-recipe-page-stone-900'>Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li className='mb-5 pl-5'><span className='font-bold text-recipe-page-stone-900'>Enjoy: </span>Serve hot, with additional salt and pepper if needed</li>
            </ul>
          </div>
          <hr />
          <div className='mt-5'>
            <p className={`${youngSerifRegular.className} text-recipe-page-brown-800 text-[30px]`}>Nutrition</p>
            <p>The table below shows nutritional values per serving without the additional fillings</p>
            <div>
              <div className='flex content-center pl-8 pt-5 mb-3'>
                <div className='w-[52%]'>Calories</div>
                <div className='font-bold text-recipe-page-brown-800'>277kcal</div>
              </div>
              <hr />
              <div className='flex content-center pl-8 pt-3 mb-3'>
                <div className='w-[52%]'>Carbs</div>
                <div className='font-bold text-recipe-page-brown-800'>0g</div>
              </div>
              <hr />
              <div className='flex content-center pl-8 pt-3 mb-3'>
                <div className='w-[52%]'>Protein</div>
                <div className='font-bold text-recipe-page-brown-800'>20g</div>
              </div>
              <hr />
              <div className='flex content-center pl-8 pt-3 mb-3'>
                <div className='w-[52%]'>Fat</div>
                <div className='font-bold text-recipe-page-brown-800'>22g</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page