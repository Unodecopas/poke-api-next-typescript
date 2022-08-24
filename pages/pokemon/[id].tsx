import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { pokeApi } from "../../api"
import {Pokemon} from '../../interfaces'
import { Layout } from "../../components/layouts"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { useState } from 'react'
import { getPokemonInfo, localFavorites } from '../../utils'
import confetti from 'canvas-confetti'
interface Props{
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
  const [favorite, setFavorite] = useState(localFavorites.existsFavorite(pokemon.id))
  const onToggleFavorites = () =>{
    localFavorites.toggleFavorites(pokemon.id)
    setFavorite(!favorite)
    if (favorite) return
    confetti({
      zIndex: 99,
      particleCount: 100,
      spread: 160, 
      angle: -100,
      origin:{
        x:1,
        y:0,
      }
    })
  }
  return (
    <Layout title={`${pokemon.name.toUpperCase()}`}>
      <Grid.Container css={{marginTop: 16}} gap={2}>
        <Grid xs={12} sm={4} >
          <Card hoverable>
            <Card.Body>
              <Card.Image 
              src={pokemon.sprites.other?.dream_world.front_default || ''} 
              objectFit='contain'
              width={400}
              height={400}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header>
              <Grid.Container>
                <Grid xs={12} sm={6} xl={6} justify='center' alignItems='center' css={{marginBottom: 16}}>
                  <Text h1 transform="capitalize">{pokemon.name}</Text>
                </Grid>
                <Grid xs={12} sm={6} xl={6} alignItems='center' justify='center' >
                  <Button color='gradient' ghost={!favorite} onClick={onToggleFavorites}>
                    {favorite ? ' ⭐ ' : 'Guardar en favoritos'}
                  </Button>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Container display='flex' direction='row' justify='center' alignItems='center'>
                <Text size={30}> Sprites: </Text>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}




export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const pokemons151 = [...Array(151)].map((value,index)=>`${index +1}`)
  return {
    paths: pokemons151.map(id=>({
      params: {id}
    })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id:string}
  
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}
export default PokemonPage