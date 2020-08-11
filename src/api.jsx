import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d8a9d029ebb6c10fb108ea1e8831299e",
    language: "en-US",
  },
});

export const getMovies = {
  popular: () => api.get("movies/popular"),
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        similar: "similar",
        video: "video",
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
        similar: "similar",
        video: "video",
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
