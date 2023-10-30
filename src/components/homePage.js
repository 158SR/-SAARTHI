import React from 'react'
import Feed from './feed'
import UpperSection from './upperSection'
import Sidebar from './sidebar'

const homePage = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
    <div class="col-span-4">
      <UpperSection/>
    </div>
  <div class="">
      <Sidebar/>
  </div>
  <div class="col-span-2">
      <Feed/>
  </div>
  <div class="">
      <Sidebar/>
  </div>

    </div>
  )
}

export default homePage
