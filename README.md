
# APPWebSocketsESP_Multi

Es una aplicación que permite crear multiples conexiones con multiples ESP mediante Websockets gracias a los componentes en REACT, ademas se puede ver la velocidad a la cual se estan recibiendo los datos, es decir la latencia actual.

## Comenzando 🚀

Se debe tener instalado node.js 

Tener en cuenta que si se hace modificaciónes en el codigo se debe ejecutar el compilador webpack, se lo puede hacer mediante "npm run webpack",
La aplicación se puede lanzar con nodemon mediante "npm run dev"

Tener en cuenta tambien que la estilización de la aplicación se hizo mediante bootstrap

### Funcionamiento 📋
Es importante que el ESP inicie su socket en el puerto 80, de lo contrario no funcionaría la comunicación, la aplicación puede desconectar y conectar la comunicación mediante el boton respectivo, los botones para solicitar o calncelar el envío de datos le informan al ESP que puede empezar a enviar datos o cancelar sus envíos mediante un codigo "ON" o "OFF" respectivamente, gracias a que esta comunicación es Full Duplex 

Para agregar una nueva conexión tambien existe un boton al final de la ventana principal, esto agregará un componente que puede establecer una comunicación particular con un ESP diferente.

![visualización](https://raw.githubusercontent.com/DavidErira/APPWebSocketsESP_Multi/master/CapturaR.PNG)


## Construido con 🛠️


* [Express](https://www.express.com/) - Marco de desarrollo
* [Node](https://nodejs.org/es/) -  para los que quieran instalar node.js
* [REACT](https://es.reactjs.org/) -  Información de REACT
* [REACT-BOOTSTRAP](https://react-bootstrap.github.io/layout/grid/) -  usar bootstrap en REACT

## Autor
 ✒️
* **David Erira** - *Desarrollo* - [DEEM](https://github.com/DavidErira)


* Comenta a otros sobre este proyecto 📢



---
⌨️ con ❤️ por [DEEM](https://github.com/DavidErira) 😊