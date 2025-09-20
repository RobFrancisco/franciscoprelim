import React from 'react'
import Image from 'next/image'

function index() {
  return (
    <div><section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pick your LECHON.</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">In most regions of the Philippines, lechón (also spelled litson or lichon) is prepared throughout the year for special occasions, festivals, and the holidays. There are two major types of preparing lechon the Philippines, the “Manila lechon” (or “Luzon lechon”), and the “Cebu lechon” (or “Visayas lechon”).</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src="/picsamp/Lechon1.jpg" width={100} height={100} alt="content"></Image>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Lechon Belly Roll</h2>
          <p class="leading-relaxed text-base">This is best served with homemade lechon sauce. You can also serve this as it is, but a little vinegar will be be better.<br/><br/></p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src="/picsamp/Lechon2.webp"  width={100} height={100} alt="content"></Image>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Binagoongang Lechon</h2>
          <p class="leading-relaxed text-base">Indulge in the flavors of our Binagoongang Lechon. A delicious and tangy dish that is perfect for a special occasion or a casual meal.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src="/picsamp/Lechon3.webp"  width={100} height={100} alt="content"></Image>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Lechon Paksiw</h2>
          <p class="leading-relaxed text-base">Im sure after the festive events, your taste buds are craving a refresh, and the tangy sauce from Lechon Paksiw is a good start!</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src="/picsamp/Lechon4.jpg"  width={100} height={100} alt="content"></Image>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Original Lechon</h2>
          <p class="leading-relaxed text-base">What can better describe the heavenly taste of Lechon with its crunchy skin with its delicate crispness that is covering the layer of melting fat</p>
        </div>
      </div>
    </div>
  </div>
</section></div>
  )
}

export default index