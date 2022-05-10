import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  
  state = {
    clients: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/clients');
    const body = await response.json();
    console.log(body);
    this.setState({
      clients: body
    })
  }
  render() {
    const {clients} = this.state;
    return (
      <div className='App'>
          <header className='App-header'>
            <img src={logo} alt="logo-react" className='App-logo'/>
            
            <div className='App-intro'>
              <h2>Clients</h2>

                {clients.map(client => 
                  <div>
                    {client.name} {client.email}
                  </div>
                  )}

            </div>
          </header>


      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="Client App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
