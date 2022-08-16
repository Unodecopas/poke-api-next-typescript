import Head from "next/head"
import { FC } from "react"
import {Navbar} from '../ui'
interface Props {
  title?: string
  children: JSX.Element
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Jesus Gallardo" />
        <meta name="description" content="Informacion sobre el pokemon" />
        <meta name="keywords" content="xxxx, pokemon, pokedex" />
      </Head> 

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main> 
    </>
  )
}
