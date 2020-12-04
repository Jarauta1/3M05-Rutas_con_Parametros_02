import './App.css';
import {useState} from "react"
import {BrowserRouter, Route, Link, useParams} from "react-router-dom"

function Cabecera(props) {
 
  return (<>
  <h1>Rutas con Parámetros</h1>
  <p>Estás en el ejercicio 2</p>
  <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to={"/resultados/"+props.num1 +"/"+props.num2}>Resultados</Link></li>
  </ul>
  </>)
}

function Resultados() {
  let {num1} = useParams()
  let {num2} = useParams()
  num1 = parseInt(num1)
  num2 = parseInt(num2)

  return(<>
  <ul>
        <li><p>Suma: {num1} + {num2} = {num1+num2}</p></li>
        <li><p>Resta: {num1} - {num2} = {num1-num2}</p></li>
        <li><p>Multiplicación: {num1} * {num2} = {num1*num2}</p></li>
        <li><p>División: {num1} / {num2} = {num1/num2}</p></li>
        <li><p>Resto: {num1} % {num2} = {num1%num2}</p></li>
      </ul>
  </>)
}

function App() {

  let [num1,setNum1] = useState(0)
  let [num2,setNum2] = useState(0)

/*   function managementChange1(e) {
    setNum1(e.target.value)
  }

  function managementChange2(e) {
    setNum2(e.target.value)
  } */

  function add1() {
    setNum1(num1+1)
  }

  function quita1() {
    setNum1(num1-1)
  }

  function add2() {
   
    setNum2(num2+1)
  }

  function quita2() {
    setNum2(num2-1)
  }

  return (
  <BrowserRouter>
  <Cabecera num1={num1} num2={num2}/>
  <div id="general">
  <div id="numerador">
    <div>
    <button onClick={add1}>Añade</button>
    <button onClick={quita1}>Quitar</button>
    <div id="numero">
    <p>{num1}</p>
    </div>
    </div>
    </div>
  <div id="numerador">
    <div>
  <button onClick={add2}>Añade</button>
    <button onClick={quita2}>Quitar</button>
    <div id="numero">
    <p>{num2}</p>
    </div>
    </div>
    </div>
    </div>
    <Route exact path="/"></Route>
    <Route exact path="/resultados/:num1/:num2">
      <Resultados/>
    </Route>
</BrowserRouter>);
}

export default App;
