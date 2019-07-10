import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //const movies = [
    //  { id: 0, title: "Avengers", overview: "movie description" },
    //  { id: 1, title: "The Fog", overview: "movie description" }
    //   ];

    //   this.state = {
    //     rows: [
    //       <p key="1">This is row 0</p>,
    //       <p key="2">This is row 1</p>,
    //       <p key="3">This is row 2</p>
    //     ]
    //   };

    //   var movieRows = [];
    //   movies.forEach(movie => {
    //     const movieRow = <MovieRow movie={movie} />;
    //     movieRows.push(movieRow);
    //   });

    //   this.state = { rows: movieRows };
    this.performSearch("matrix");
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
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img
                  width="50"
                  alt="moviedb-icon"
                  src={require("./moviedb.JPG")}
                />
              </td>
              <td width="8" />
              <td>MoviedDB Search</td>
            </tr>
          </tbody>
        </table>

        <input
          onChange={this.searchChangeHandler}
          placeholder="Enter search term"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
