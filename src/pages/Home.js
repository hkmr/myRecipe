import React, { Component } from "react";
import Recipe from "../components/RecipeCard";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipies: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch("http://starlord.hackerearth.com/recipe")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          recipies: data,
          isLoading: false
        });
      });
  }

  renderList = () =>{
      return (
        <div className="columns is-desktop is-multiline is-centered">
          {this.state.recipies.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
              >
                <Recipe
                  name={recipe.name}
                  label={recipe.label}
                  category={recipe.category}
                  img={recipe.image}
                  price={recipe.price}
                  description={recipe.description}
                />
              </div>
            );
          })}
        </div>
      );
  }

  render() {
    return (
      <div className="container">
        <div className="level">
          <div className="level-left">
            <h1 className="title">MyRecipes</h1>
          </div>
          <div className="level-right has-text-weight-bold">
            <Link className="has-text-black" to="/cart">MyCart (5)</Link>
          </div>
        </div>
        {
            this.state.isLoading ? <p className="title">Loading...</p> : this.renderList()
        }
      </div>
    );
  }
}
