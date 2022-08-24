import { Card, Grid, Row, Text } from "@nextui-org/react"
import Link from "next/link"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
  return (
    <Link href={`/name/${pokemon.name}`}>
    <Grid xs={12} sm={6} md={4} xl={2}  key={pokemon.id}>
    <Card hoverable clickable>
      <Card.Body>
        <Card.Image src={pokemon.img} 
          alt="Default Image"
          objectFit="contain"
          width={100}
          height={100}
          />
      </Card.Body>
      <Card.Footer>
          <Row justify='center'>
            <Text transform='capitalize' ># {pokemon.id} - {pokemon.name}</Text>
          </Row>
      </Card.Footer>
    </Card>
    </Grid>
    </Link>
)
}
