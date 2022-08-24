import { Container, Text, Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container className='no-favorites'>
        <Text h1> No hay favoritos</Text>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg' alt='sprite Ditto' width={100} height={100}/>
      </Container>
  )
}
