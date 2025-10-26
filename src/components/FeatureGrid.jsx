import React from 'react'

function FeatureGrid() {
  return (
    <div>

      {/* flex box property explain  */}
      {/* <main class="flex flex-col gap-6 p-10 bg-gray-100">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1 bg-green-200 p-4">Top Left</div>
          <div class="flex-1 bg-green-300 p-4">Top Right</div>
          <div class="flex-1 bg-green-400 p-4">Top Right</div>

          <div class="flex-1 bg-green-500 p-4">Top Right</div>

        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-[60%] bg-yellow-200 p-4 flex flex-col gap-2">
            <div class="bg-yellow-300 p-2">Nested Top</div>
            <div class="bg-yellow-400 p-2">Nested Bottom</div>
          </div>
          <div class="flex-1 bg-yellow-500 p-4">Side Column</div>
        </div>

        <div class="flex flex-wrap gap-4">
          <div class="flex-[1_1_30%] bg-red-200 p-4">Grid Item 1</div>
          <div class="flex-[1_1_30%] bg-red-300 p-4">Grid Item 2</div>
          <div class="flex-[1_1_30%] bg-red-400 p-4">Grid Item 3</div>
        </div>
      </main> */}


      <ResponsiveCards />
    </div>
  )
}

export default FeatureGrid


function ResponsiveCards() {
  return (
    <>
      <div className='max-w-[1400px] mx-auto bg-amber-50'>
        <div className='w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-zinc-50 my-5'>
          <div className='relative overflow-hidden group hover:shadow-xl bg-amber-200 p-4 rounded-md text-center'>
            <div className='absolute top-0 left-0 right-0  group-hover:top-4 transition-all duration-200 ease-in-out'>
              <img className=' w-50 mx-auto' src="https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-01.png" alt="" />
            </div>
            <div className='mt-35'>
              <h2 className="mb-2 text-2xl font-bold text-gray-700">Card 1</h2>
              <p className='text-zinc-400 text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dicta optio temporibus ad iste. Error dolorem excepturi amet neque eveniet.</p>
            </div>
          </div>

          <div className='relative overflow-hidden group hover:shadow-xl bg-amber-200 p-4 rounded-md text-center'>
            <div className='mb-35'>
              <h2 className="mb-2 text-2xl font-bold text-gray-700">Card 1</h2>
              <p className='text-zinc-400 text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dicta optio temporibus ad iste. Error dolorem excepturi amet neque eveniet.</p>
            </div>
            <div className='absolute -bottom-14 left-0 right-0 z-10  group-hover:-translate-x-1/2 transition-all duration-300 ease-in-out'>
              <img className=' w-50 mx-auto' src="https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-01.png" alt="" />
            </div>
            <h3 className='w-[50px] h-[50px] absolute right-1/2 left-1/2 z-15 bottom-5 opacity-0 group-hover:opacity-100
             group-hover:translate-x-23 text-2xl font-bold bg-amber-500 flex justify-center items-center 
             rounded-md transition-all duration-300' >2</h3>
          </div>

          <div className='relative group bg-green-200 rounded-md p-5 text-center'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <img className='w-50' src="https://themesflat.co/html/restaurant/fastfood/assets/images/common/item-01.png" alt="" />
              <h3 className='text-2xl font-extrabold'>Burger Kings</h3>
            </div>
            <div className='absolute bottom-0   group-hover:bottom-full transition-all duration-200 p-5'>
              <h3 className='text-2xl font-extrabold'>Burger Kings</h3>
              <p className='text-md text-zinc-400 mt-2'>Magnam, fuga? Aperiam odit minus quod iste  Magnam, fuga? Aperiam odit minus quod iste reiciendis alias voluptatum tenetur obcaecati nostrum.</p>
            </div>
          </div>

          <div className='bg-amber-200 p-4 rounded-md'><h2 className="font-semibold text-gray-700">Card 1</h2></div>

          <div className='bg-amber-200 p-4 rounded-md'><h2 className="font-semibold text-gray-700">Card 1</h2></div>
          <div className='bg-amber-200 p-4 rounded-md'><h2 className="font-semibold text-gray-700">Card 1</h2></div>
          <div className='bg-amber-200 p-4 rounded-md'><h2 className="font-semibold text-gray-700">Card 1</h2></div>
          <div className='bg-amber-200 p-4 rounded-md'><h2 className="font-semibold text-gray-700">Card 1</h2></div>

        </div>
      </div>

    </>
  )
}