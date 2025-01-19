"use client"
import React, { useState } from 'react'
import Container from '@/components/custom/Container'
import Row from '@/components/custom/Row'
import MobileButton from '@/components/modules/header/MobileButton'
import Logo from '@/components/custom/Logo'
import IconsGroups from '@/components/modules/header/IconsGroups'
import MainMenu from '@/components/modules/header/MainMenu'

const Main = () => {

  const [openSearchBar, setOpenSearchBar] = useState(false);

  return (
    <section className='h-full'>
      <Container>
        <Row className='justify-between'>
          <MobileButton />
          <Logo />
          <MainMenu />
          <IconsGroups openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar} />
        </Row>
      </Container>
    </section>
  )
}

export default Main