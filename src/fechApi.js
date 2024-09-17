import axios from "axios";

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTE5YTg1MjE2NjA5OGM3Yzc3MDBiNzMxMjM2YzBlMSIsIm5iZiI6MTcyNjQ4NTg3NS45NjM5NDEsInN1YiI6IjY2ZTgxMzlhZDdiY2NhNTI0ZGIxMDhjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xi6tEENKROeKkvrXlyCJGnxj9BCb5z-9O20zhdwvFRk'
  }
};

export const getTrendingMovies = async() => {
const trendUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'; 

const trendResponse = await axios.get(trendUrl, options);
    return trendResponse.data.results
}

export const getMovieDetails = async(id) => {
  const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`; 
  
  const detailsResponse = await axios.get(detailsUrl, options);
      return detailsResponse.data
  }

export const getSearchMovies = async(word) => {
const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=en-US&page=1`; 

const searchResponse = await axios.get(searchUrl, options);
    return searchResponse.data.results
    }

export const getCreaditsOfMovie =  async(id) => {
const creaditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`; 

const creaditsResponse = await axios.get(creaditsUrl, options);
    return creaditsResponse.data.cast
    }

export const getReviewsOfMovie =  async(id) => {
const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}}/reviews?language=en-US&page=1`; 
    
const reviewsResponse = await axios.get(reviewsUrl, options);
    return reviewsResponse.data.results
    }