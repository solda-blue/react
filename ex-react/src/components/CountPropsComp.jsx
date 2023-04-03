import { Component } from "react";

class CountPropsComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        const {state : {num}} = this;

        return(
            <div>
                <h1>{num}</h1>
                <button onClick={() => {
                    // 두개 같네
                    // this.setState((prevState) => ({num : prevState.num + num}));
                    this.setState( {num : num + num} );
                    
                }}>버튼</button>
            </div>
        )
    }
}

export default CountPropsComp;