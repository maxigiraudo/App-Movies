import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, addMovieFavorite } from "../../actions";
import styles from "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="totalos">
          <h2 className="buscadorr">Buscador</h2>
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div>
              <label className="label" htmlFor="title">
                Película:{" "}
              </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button
              className="boton"
              type="submit"
              onClick={() => this.props.getMovies(title)}
            >
              BUSCAR
            </button>
          </form>
          <ul className="listosebich">
            {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
            {/* {this.props.movies?.map((m) => (
            <div key={m.imdbID}>
              <Link to={`/movie/${m.imdbID}`}>
                <li>{m.Title}</li>
              </Link>
              <button
                onClick={() =>
                  this.props.addMovieFavorite({
                    Title: m.Title,
                    imdbID: m.imdbID,
                  })
                }
              >
                FAV
              </button>
            </div>
          ))} */}

            {this.props.movies.map((e) => {
              console.log(e);
              return (
                <div key={e.imdbID}>
                  <div className="corazonYTitulo">
                    <Link className="tituloA" to={`/movie/${e.imdbID}`}>
                      <p className="titulo">{e.Title}</p>
                    </Link>
                    <button
                      className="corazon"
                      onClick={() => this.props.addMovieFavorite(e)}
                    >
                      ❤️
                    </button>
                    <img
                      className="imagen"
                      src={e.Poster}
                      alt="Poster de la pelicula"
                    />
                  </div>
                  <br />
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded,
    // movieDetail: state.movieDetail,
  };
};

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     getMovies: (titulo) => dispatch(getMovies(titulo))
//   }
// }

export default connect(mapStateToProps, {
  getMovies,
  addMovieFavorite,
  // getMovieDetail,
})(Buscador);
