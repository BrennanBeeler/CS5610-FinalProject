import React from 'react'

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <h1>Val: {this.props.loggedIn.toString()}</h1>
        )
    }
}