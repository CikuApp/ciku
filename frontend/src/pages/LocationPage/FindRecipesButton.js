import React from 'react'
import { Link } from 'react-router-dom'

// Components
import { Button } from 'components/atoms'

// Hooks
import useFindRecipes from 'hooks/useFindRecipes'

const FindRecipesButton = () => {
  const [findRecipes] = useFindRecipes()

  return (
    <Link to="/recipes">
      <Button type="primary" onClick={findRecipes}>
        Find Recipes
      </Button>
    </Link>
  )
}

export default FindRecipesButton
