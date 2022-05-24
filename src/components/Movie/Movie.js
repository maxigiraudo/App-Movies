import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div className="movieCard">
          <h1 className="tituloD">{this.props.movieDetail.Title}</h1>
          <div className="imgDescr">
            <img
              src={this.props.movieDetail.Poster}
              alt="Poster de la pelicula"
            />
            <div className="descripcion">
              <h2>Descripción</h2>
              <h3>Reparto: {this.props.movieDetail.Actors}</h3>
              <p>{this.props.movieDetail.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail,
  };
};

export default connect(mapStateToProps, { getMovieDetail })(Movie);
