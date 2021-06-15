import axios from 'axios';
import {
  paramsBuilder,
  randomParamsBuilder,
  produceParamsBuilder
} from './queryHelpers';

// API endpoints
const baseUrl = `${process.env.NODE_ENV === 'development' ? '' : '/backend'}`;

/**
 * Fetches one recipe from the API
 *
 * @param  {string}   query
 * @param  {string}   location
 *
 * @returns {(array|null)} null if API error
 */
const getOneRecipe = async (query, location) => {
  try {
    const params = paramsBuilder({ query, location });
    const response = await axios.get(`${baseUrl}/recipes`, { params });
    // API is returning string for now - do not remove JSON.parse()
    return JSON.parse(response.data)[0];
  } catch (err) {
    console.error('Error getting one recipe', err);
    return null;
  }
};

/**
 * Fetches recipes from the API
 *
 * @param  {string}   query
 * @param  {string}   tags
 * @param  {string}   ingredients
 * @param  {string}   location
 * @param  {number}   count
 *
 * @returns {(array|null)} null if API error
 */
const getRecipeResults = async (query, tags, ingredients, location, count) => {
  try {
    const params = paramsBuilder({
      query,
      location,
      tags,
      ingredients,
      count
    });

    const response = await axios.get(`${baseUrl}/recipes`, { params });

    return JSON.parse(response.data);
  } catch (err) {
    // console.error('Error getting recipes', err);
    return null;
  }
};

/**
 * Fetches random recipes from the API
 *
 * @param  {string}   location
 * @param  {number}   count
 * @param  {number}   minSusScore = 3
 *
 * @returns {(array|null)} null if API error
 */
const getRandomRecipes = async (count, location, minSusScore = 3) => {
  try {
    const params = randomParamsBuilder({ count, location, minSusScore });

    const response = await axios.get(`${baseUrl}/random`, { params });
    return JSON.parse(response.data).slice(0, 8);
  } catch (err) {
    // console.error('Error getting random recipes', err);
    return null;
  }
};

/**
 * Fetches produce items from the API
 *
 * @param  {string}   location
 *
 * @returns {(array|null)} null if API error
 */
const getProduce = async location => {
  try {
    const params = produceParamsBuilder({
      location
    });
    const response = await axios.get(`${baseUrl}/seasonal`, { params });

    return JSON.parse(response.data);
  } catch (err) {
    // console.error('Error getting produce, err);
    return null;
  }
};

export { getOneRecipe, getRecipeResults, getRandomRecipes, getProduce };
