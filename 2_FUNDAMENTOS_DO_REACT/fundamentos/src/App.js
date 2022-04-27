//components
import FirstComponent from './components/FirstComponent.js';
import TemplateExpressions from './components/TemplateExpressions.js';
//style / css
import './App.css';
import MyComponent from './components/MyComponent.js';
import Events from './components/Events.js';
import Challenge from './components/Challenge.js';


function App() {
  return (
    <div className="App">
     <h1>Fundamentos em react</h1>
     <FirstComponent/>
     <TemplateExpressions/>
     <MyComponent/>
     <Events/>
     <Challenge/>
    </div>
    //tambem podemos colocar o "MyComponent" aqui no "app.js", ou se preferir somente no "FirstComponent" ou uma aplicação de sua preferencia
  );
}

export default App;
