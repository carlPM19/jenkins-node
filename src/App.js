import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      

<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Curso Sistemas Operativos 1</h1>
		  
		  <style>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
</style>
		  
        </header>
        <p className="App-intro">
          Universidad Mariano Galvez de Guatemala, Curso SO1, Carlos Pirir

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		
		<button class="accordion">Acerca del curso</button>
<div class="panel">
  <p>La finalidad de este curso es aprender a diseñar e implementar aplicaciones que hagan uso de los servicios proporcionados por el sistema operativo, así adquirir los conocimientos necesarios para utilizar el sistema operativo a nivel de usuario avanzado </p>
</div>

<button class="accordion">Centro Universitario</button>
<div class="panel">
  <p>Centro Universitario San Juan Sacatepéquez, Guatemala Oficinas Administrativas 9a. calle 4-26 zona 4</p>
</div>



<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>
      </div> 
	  
	  
    );
  }
}

export default App;
