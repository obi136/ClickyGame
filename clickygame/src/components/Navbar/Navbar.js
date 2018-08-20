import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Car Memoir</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link"></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">Score: {this.props.score}</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

