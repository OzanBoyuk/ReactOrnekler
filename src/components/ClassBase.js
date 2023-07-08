import React from 'react';

class ClassBase extends React.Component {

    //reactta her state değişiminde render otomatik çalışır

    constructor(props) {
        super(props);
        console.log("construtor çalıştı.")
        this.state={
            color : "red"
        }

    }

    componentDidMount() {
        console.log("componentDidMount çalıştı.")
    }

    changeColor () {
        this.setState({color: 'blue'})
    }

    render() {
        console.log("render çalıştı.")

        return (
            <div>
                <button onClick={()=>this.changeColor()}>Tıkla</button>
                <h2 style={{color:this.state.color}}>{this.state.color}</h2>
            </div>
        );
    }
}

export default ClassBase;
