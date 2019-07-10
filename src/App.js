import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
    this.performSearch("searchValue");
  }

  performSearch(searchTerm) {
    console.log("Perform serach");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=93ed304a8f6ac2a570f5ac494db97729&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetched data successfully");
        const results = searchResults.results;

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    });
  }

  searchChangeHandler = event => {
    console.log(event.target.value);
    this.performSearch(this.state.searchValue);
  };

  change = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img
                  width="120"
                  alt="moviedb-icon"
                  src={require("./mdb-logo.png")}
                />
              </td>
              <td width="8" />
              <td>Search Movies</td>
            </tr>
          </tbody>
        </table>
        <div>
          <input
            className="searchField leftPadding"
            onChange={e => this.change(e)}
            type="text"
            name="film"
            placeholder="Enter Movie title ..."
          />
          <button className="btn" onClick={this.searchChangeHandler}>
            Search
          </button>
        </div>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
