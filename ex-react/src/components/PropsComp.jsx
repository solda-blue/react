import { Component } from 'react';

class PropsComp extends Component {
    render() {
        const {color, children} = this.props;
        const style = {
            color : color
        }
        return (
            <div>
                <h1 style={style}>{children}</h1>
            </div>
        )
    }
}

export default PropsComp;