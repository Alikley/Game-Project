import { useEffect, useState } from 'react'

import './App.css'
import { ColorModeButton } from './components/ui/color-mode'
import GameGrid from './components/GameGrid'
import { Grid, GridItem, chakra } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" >
          <NavBar />
        </GridItem>
        <chakra.div
          as={GridItem}
          bg=""
          display={{ base: 'none', lg: 'block' }}
        >
          
        </chakra.div>
        <GridItem area="main" >
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
