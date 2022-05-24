import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <div className="contenedorF">
          <h2 className="peliculasFavoritash2"> Películas Favoritas </h2>
          <ul className="listaF">
            {this.props.moviesFavourites.map((e) => {
              return (
                <div className="elementoF" key={e.imdbID}>
                  <Link className="tituloFA" to={`/movie/${e.imdbID}`}>
                    <p className="tituloF">{e.Title}</p>
                  </Link>
                  <button
                    className="botonF"
                    onClick={() => {
                      this.props.removeMovieFavorite(e.imdbID);
                    }}
                  >
                    ❎
                  </button>
                  <img
                    className="imagenF"
                    src={e.Poster}
                    alt="Poster de la pelicula"
                  />
                </div>
              );
            })}
          </ul>
          {/* {this.props.movies?.map((m) => (
          <div key={m.imdbID}>
            <Link to={`/movie/${m.imdbID}`}>
              <li>{m.Title}</li>
            </Link>
            <button
              onClick={() =>
                this.props.removeMovieFavorite({
                  imdbID: m.imdbID,
                })
              }
            >
              X
            </button>
          </div>
        ))} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesFavourites: state.moviesFavourites,
  };
};

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
