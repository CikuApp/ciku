import axios from 'axios'
import { paramsBuilder, randomParamsBuilder } from 'utils/queryHelpers'

const baseUrl = `${
  process.env.NODE_ENV === 'development' ? '' : '/backend'
}/recipes?`

const randomBaseUrl = `${
  process.env.NODE_ENV === 'development' ? '' : '/backend'
}/random?`

const getOneRecipe = async (query, location) => {
  try {
    const params = paramsBuilder({ query, location })
    const response = await axios.get(baseUrl, { params })
    // API is returning string for now - do not remove JSON.parse()
    return JSON.parse(response.data)[0]
  } catch (err) {
    console.error(err)
    return []
  }
}

const getRecipeResults = async (query, tags, ingredients, location, count) => {
  try {
    const params = paramsBuilder({
      query,
      location,
      tags,
      ingredients,
      count,
    })

    const response = await axios.get(baseUrl, { params })

    return JSON.parse(response.data)
  } catch (err) {
    console.error(err)

    // fallback for errors from server
    return []
  }
}

const getRandomRecipes = async (count, location, minimum_sus_score = 3) => {
  try {
    const params = randomParamsBuilder({ count, location, minimum_sus_score })

    const response = await axios.get(randomBaseUrl, { params })
    return JSON.parse(response.data).slice(0, 8)
  } catch (err) {
    console.error(err)
    return []
  }
}

export { getOneRecipe, getRecipeResults, getRandomRecipes }
