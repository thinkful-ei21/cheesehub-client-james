import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

export class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }

    render() {
        console.log(this.props, 'hello world');
        this.cheeses = this.props.cheeses.map((cheese, index) => {
            return <li key={index}>{cheese}</li>;
        });
        return <ul>{this.cheeses}</ul>;
    }
}

const mapStatetoProps = state => {
    return {
        cheeses: state.cheeses
    };
};

export default connect(mapStatetoProps)(CheeseList);
