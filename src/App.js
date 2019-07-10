import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow";

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
    this.performSearch();
  }

  performSearch() {
    console.log("Perform serach");
  }

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

        <input placeholder="Enter search term" />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
