// export function getMovies(titulo) {
//   return function (dispatch) {
//     return fetch("https://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: "GET_MOVIES", payload: json });
//       });
//   };
// }

// export function getMovieDetail(idMovie) {
//   return function (dispatch) {
//     return fetch(`https://www.omdbapi.com/?apikey=20dac387&i=${idMovie}`)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: "GET_MOVIE_DETAIL", payload: data });
//       });
//   };
// }

// export function addMovieFavorite(payload) {
//   return { type: "ADD_MOVIE_FAVORITE", payload };
// }

// export function removeMovieFavorite(idMovie) {
//   return {
//     type: "REMOVE_MOVIE_FAVORITE",
//     payload: idMovie,
//   };
// }

const API_KEY = "6d022ee2";

export function addMovieFavorite(infoPeli) {
  return { type: "ADD_MOVIE_FAVORITE", payload: infoPeli };
}

export function removeMovieFavorite(id) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: id,
  };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json.Search });
      });
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}
