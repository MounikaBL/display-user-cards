import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    onClickLoadMore = () => {
        this.props.loadMore();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.users !== prevProps.users) {
            window.scrollTo(0, document.body.scrollHeight)
        }
    }

    render() {
        let user = this.props.user;
        return (
            <div className="column card">
                {this.props.button ?
                    <div className="load-button" onClick={this.onClickLoadMore} style={{ backgroundImage: "url(https://image.freepik.com/free-vector/blue-background-with-white-snowflakes_1048-3919.jpg)" }}>
                        <label>Load More....</label>
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
