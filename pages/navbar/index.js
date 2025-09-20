import React from 'react'
import Link from 'next/link'


function index() {
  return (
    <div><header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link href = "/"><div class="mr-5 hover:text-gray-900">Home</div></Link>
    <Link href = "/about"><div class="mr-5 hover:text-gray-900">About</div></Link>
    <Link href = "/contact"><div class="mr-5 hover:text-gray-900">Contact</div></Link>
    <Link href = "/team"><div class="mr-5 hover:text-gray-900">Team</div></Link>
    </nav>
    
  </div>
</header></div>
  )
}

export default index