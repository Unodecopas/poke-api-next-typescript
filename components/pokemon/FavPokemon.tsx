import { Grid, Card } from "@nextui-org/react"
import { FC } from "react"
import NextLink from "next/link"
interface Props{
  pokemons: number[]
}
export const FavPokemon: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify="flex-start">
          {
            pokemons.map(id =>(
              <NextLink href={`/pokemon/${id}`} key={id} passHref>
                <Grid  xs={6} sm={4} md={3} xl={3}>
                  <Card clickable css={{padding: 10}}>
                    <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt='Pokemon' width={'100%'} height={100} objectFit='contain'/>
                  </Card>
                </Grid>
              </NextLink>
            ))
          }
        </Grid.Container>
    
  )
}
