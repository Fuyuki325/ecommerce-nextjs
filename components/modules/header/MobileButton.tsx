import React from 'react'
import SidebarMenu from '@/components/modules/header/SidebarMenu'

const MobileButton = () => {
  return (
    <div className='block lg:hidden'>
      <SidebarMenu />
    </div>
  )
}

export default MobileButton