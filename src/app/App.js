import React, {Component} from 'react';
import './App.css'
import InterfazConect from './components/interfazConect/InterfazConect.jsx';
import { Col , Row, Container } from 'react-bootstrap';

class App extends Component {

    constructor() {
        super();
        this.state= {
            numConect:1,
            rows : [<InterfazConect key={1} />],
        };

        this.newConect = this.newConect.bind(this);

    }

    componentDidMount(){

    }

    newConect(){
       //e.preventDefault();
       let nuevo = nuevo = this.state.rows;
       nuevo.push(<InterfazConect key={this.state.numConect+1} />);

        this.setState({
            numConect: this.state.numConect+1,
            rows: nuevo
        })
    }


    render (){
     

        return (
            <div>
                <div id ="title-container">
                    <h3> <strong>APP WebSockets con REACT</strong></h3>
                    <h6> Comunicación mediante websockets, entre esta aplicación y uno o varios ESP32 o ESP8266 </h6>
                </div>

                <div id ="container1">
                    {this.state.rows}
                </div>

                <button id = "SocketNew" onClick={this.newConect} > Nuevo Socket + </button>

            </div>
        )
    }
}

export default App;
