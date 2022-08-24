import { SmallPokemon } from "../interfaces"

const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('pokemonFavorites') || '[]')
  if(favorites.includes(id)){
    favorites = favorites.filter(pokeId => pokeId !== id)
   }else{ 
    favorites.push(id)
   }
  localStorage.setItem('pokemonFavorites', JSON.stringify(favorites))
}
const existsFavorite  = (id: number): Boolean =>{
  if( typeof window === 'undefined') return false
 const favorites: number[] = JSON.parse(localStorage.getItem('pokemonFavorites') || '[]')
 return favorites.includes(id)
}
const getFavorites = (): number[] =>{
  return JSON.parse(localStorage.getItem('pokemonFavorites') ||'[]')
}

export  {
  toggleFavorites, 
  existsFavorite,
  getFavorites
}
