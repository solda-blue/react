import { Component } from 'react';

class CountComp extends Component {
    constructor() {
        super();
        this.state = {
            number : 0
        }
    }
    render() {
        const {number} = this.state;
        return (
            <div>
                <h2>{number}</h2>
                <button onClick={ () => {
                    this.setState({number : number + 10})
                }}>버튼</button>
            </div>
        )
    }
}

export default CountComp