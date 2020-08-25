import React, {Component } from 'react';
import './InterfazConect.css';
import { Col , Row, Container } from 'react-bootstrap';

class InterfazConect extends Component {

    constructor(){
        super();
        this.state= {
            ip:'',
            conectado:0,
            message: [<p key={1}> Desconectado </p>],
            connection:'',
            late:'-- '
        };

        this.conectar = this.conectar.bind(this);
        this.desconectar = this.desconectar.bind(this);
        this.solicitardatos = this.solicitardatos.bind(this);
        this.cancelardatos = this.cancelardatos.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){

    }

    conectar(){

        var start = new Date ();
        var end = new Date ();

        // crear una conexión websocket ---------------------------------------------------------------
        if(this.state.ip != ''){
           this.state.connection= new WebSocket('ws://'+this.state.ip+':80/'); // IP del ESP y el puerto en donde se inició el socket, antes de ejecutar esta linea --> ESP ON
           
           this.state.connection.onopen = () => {
            this.state.connection.send('Listo :)');
            this.setState({
                conectado: 1,
                message: [<p key={1}> Conenctado - Sin envío de datos </p>]
            })
           };
          
           this.state.connection.onmessage = (e) => {
               end = new Date();
            this.setState({
                message: [<p key={1} > Valor: </p>,<h1 key={2} >{e.data}</h1>],
                late: end - start
            })
               start = new Date();
           };
          
           this.state.connection.onerror = (error) => {
            this.setState({
                conectado : 0
            })
          };

          this.state.connection.onclose = (e) => {
            this.setState({
                conectado : 0
            })
          };

        }
    }

    handleChange(e){
        const { name, value }= e.target;
        this.setState({
            [name] : value
        });
    }

    solicitardatos(){
        if(this.state.conectado == 1){
        this.state.connection.send('ON');
        }
    }

    cancelardatos(){
        if(this.state.conectado == 1){
        this.state.connection.send('OFF');
        this.setState({
            message: [<p key={1}> Conenctado - Sin envío de datos </p>]
        })
        }
    }

    desconectar(){
        if(this.state.conectado == 1){
            this.state.connection.close();
            this.setState({
                conectado: 0,
                message: [<p key={1}> Desconectado </p>]
            })

        }
    }

    
    render (){

      return(

           <div id = "variable-container">

            

                 <div id ="variable-window">
                    <Row>
                        <Col xs={7}>
                            <div id = "output">
                            {this.state.message}
                            </div>
                        </Col>
                        <Col >
                            <h4>Latencia</h4>
                            <p>{this.state.late}ms</p>
                        </Col>
                    </Row>
                 </div>

                <input name = "ip" onChange={this.handleChange} id="miinput"
                 value= {this.state.ip} type="text"  placeholder="IP del dispositivo ESP"/> 

                <div id = "Btn_Container">
                    <button id="mibutton" onClick={this.conectar}>Conectar</button>
                    <button id="mibutton" onClick={this.desconectar} >Desconectar</button>
                    <button id="mibutton" onClick={this.solicitardatos} >Solicitar envío de datos</button>
                    <button id="mibutton" onClick={this.cancelardatos} >Cancelar envío de datos</button>
                    
                </div>

         </div>

      )
    }

}

export default InterfazConect;