import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class RecipeCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSelected: false
        }
    }

    handleAdd = ()=>{
        this.setState({
            isSelected: true
        })
    }

    render() {
        return (
            <div className="card card-equal-height" style={{width: "300px"}}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.img} alt={this.props.name} />
                        {
                            this.props.label !== "" ? <div className="ribbon ribbon-top-left"><span>{this.props.label}</span></div> : <span/>
                        }
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{this.props.name}</p>
                    <p className="subtitle has-text-weight-bold">$ {this.props.price}</p>
                    <span className="tag is-info">{this.props.category}</span><br/>
                    <div className="content">
                        {this.props.description}
                    </div>
                    {
                        !this.state.isSelected ? <button onClick={this.handleAdd} class="button is-warning">ADD +</button> :
                        <div className="block">
                            <div className="field has-addons">
                            <p className="control">
                                <button className="button is-small">
                                    <span className="icon is-small">-</span>
                                </button>
                            </p>
                            <p className="control">
                                <span className="has-text-weight-bold px-2">1</span>
                            </p>
                            <p className="control">
                                <button className="button is-small">
                                    <span className="icon is-small">+</span>
                                </button>
                            </p>
                        </div>
                            <Link to="/cart">Order Now</Link>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
