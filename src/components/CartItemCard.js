import React from 'react'

export default function CartItemCard() {
    return (
        <div className="media" style={{width: "500px"}}>
            <figure class="media-left">
                <p class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                </p>
                Total: 3
                <div className="field has-addons">
                            <p className="control">
                                <button className="button is-small">
                                    <span className="icon is-small">-</span>
                                </button>
                            </p>
                            <p className="control">
                                <span className="has-text-weight-bold">1</span>
                            </p>
                            <p className="control">
                                <button className="button is-small">
                                    <span className="icon is-small">+</span>
                                </button>
                            </p>
                        </div>
                </div>
                <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item">
                    <span class="icon is-small"><i class="fas fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                    <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                    </a>
                </div>
                </nav>
            </div>
            <div class="media-right">
                <button class="delete"></button>
            </div>
        </div>
    )
}
