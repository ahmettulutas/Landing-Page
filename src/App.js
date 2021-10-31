import './App.css';
import Typewriter from "typewriter-effect";
function App() {
  return (
    <div className="App">
      <h1>This is Ahmet Ulutaş's Landing Page</h1>
      <p className="type-writer">I'm a <Typewriter 
    options={{
    strings: ['Self-Taught Programmer', 'React Student' ,'English Teacher'],
    autoStart: true,
    loop: true,
    delay:200,
      }}
      
      /> </p>
        
      <p>Trying to learn React.js on my own. Got some cool projects. Contact me for bussiness cooperation.</p>
      <p>Gonna publish my own landing page here soon.</p>
    </div>
  );
}

export default App;
