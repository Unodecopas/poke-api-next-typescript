import { Text, useTheme } from "@nextui-org/react"
import Image from "next/image"


export const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value
    }}>
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        alt='Sprite de Charizard'
        width={50}
        height={50}
      />
      <Text color="white" h2 >P</Text>
      <Text color="white" h3 >okemon</Text>
    </div>
  )
}
