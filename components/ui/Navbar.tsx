import {Button, Container, Link, Text, useTheme } from '@nextui-org/react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import NextLink from "next/link"

export const Navbar = () => {
  
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-around',
      padding: '0px 50px',
      backgroundColor: theme?.colors.gray900.value
    }}>
      <Container display='flex' justify='flex-start' alignItems='center'>
      <NextLink href='/' passHref>
        <Link>
          <Image src={logo} alt='LogoPokemon' width={200} height={100} objectFit='contain' quality={100}/>
        </Link>
      </NextLink>
      </Container>
      <NextLink href='/favorites' passHref>
        <Link  css={{paddingRigth: 16}}>
          <Button bordered color='success' ghost auto>Favoritos</Button>
        </Link>
      </NextLink>
    </div>
  )
}
