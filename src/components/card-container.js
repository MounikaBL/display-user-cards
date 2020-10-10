import React, { Component } from 'react';
import { get } from "lodash";

class CardContainer extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (this.props.users !== prevProps.users) {
            window.scrollTo(0, document.body.scrollHeight)
        }
    }

    render() {
        return (
            <div>
                {
                    get(this.props, "users", []).length === 0 && this.props.loading ?
                        <div>Loading....</div>
                        :
                        <div>
                            {get(this.props, "users", "") && get(this.props, "users", []).map((user, index) => {
                                return index < 100 ? <Card user={user} /> : ""
                            })}
                        </div>
                }
            </div>
        )
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
    }

    onClickLoadMore = () => {

        this.props.loadMore;
    }
    render() {
        let user = this.props.user;
        return (
            <div className="column card">
                {this.props.button ?
                    <div className="load-button">
                        <button onClick={this.onClickLoadMore}>Load More....</button>
                    </div>
                    :
                    <div className="flip">
                        <div className="front" style={{ background: "#bc76ac", backgroundImage: "url(" + user.picture.large + ")" }}>
                            <h1 className="text-shadow">{user.name.first + " " + user.name.last}</h1>
                        </div>
                        <div className="back">
                            <h2>{user.name.first}</h2>
                            <p>
                                <span>Email:</span>
                                <br />
                                <span style={{ wordBreak: "break-all" }}>{user.email}</span>
                            </p>
                            <p>
                                <span>Phone:</span>
                                <br />
                                <span>{user.phone}</span>
                            </p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CardContainer;
