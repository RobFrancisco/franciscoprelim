import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function index() {
  return (
    <div><section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image class="object-cover object-center rounded" alt="hero" width={1500} height={1500} src="/picsamp/Lechon.jpg"></Image>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Homemade Lechon
        <br class="hidden lg:inline-block"/>Get one before it's sold out!
      </h1>
      <p class="mb-8 leading-relaxed">Our lechon is prepared stuffed with herbs which usually include scallions, bay leaves, black peppercorn, garlic, salt, and distinctively tanglad (lemongrass), among other spices. A variant among Hiligaynon people also stuffs the pig with batuan or binukaw (Garcinia binucao). It is usually cooked over charcoal made from coconut husks. Since it is already flavored with spices, it is served with minimal dipping sauces, like salt and vinegar or silimansi (soy sauce, calamansi, and labuyo chili).</p>
      <div class="flex justify-center">
        <Link href = "/content"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Try it!</button></Link>
      </div>
    </div>
  </div>
</section></div>
  )
}

export default index