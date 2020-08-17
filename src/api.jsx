import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: api_key,
    language: "en-US",
  },
});

export const getMovies = {
  popular: () => api.get("movie/popular"),
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const getShow = {
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export default api;
