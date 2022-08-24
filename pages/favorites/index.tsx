import { Card, Grid, Image, Link } from "@nextui-org/react"

import { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { FavPokemon } from "../../components/pokemon"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils"

 const Favorites = () => {
  const [favorites, setFavorites] = useState<number[]>([])
  useEffect(()=>{
    setFavorites(localFavorites.getFavorites())
  },[])
  return (
    <Layout>
      {
        favorites.length !== 0
        ? <FavPokemon pokemons={favorites}/>
        : <NoFavorites />
      }
      
    </Layout>
  )
}

export default Favorites