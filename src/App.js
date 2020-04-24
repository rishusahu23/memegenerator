import React from 'react';
import Header from './component/Header'
import MemeGenerator from './component/MemeGenerator'

class App extends React.Component{
 
  render(){
    return(<div>
        <Header />
        <MemeGenerator />
    </div>)
  }
}

export default App;
