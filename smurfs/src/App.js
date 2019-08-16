
import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs, sendSmurfs } from './actions'
import FormikUserForm from './components/Form'

import Smurf from './components/smurf'
import './App.css'

function App(props) {

  if (props.gotten) return <div>
    <Smurf />
    
  </div>

  if (props.getting) return (

    <div className="App">
      <header className="App-header">
        Loading...
      </header>
    </div>

  )

  else return (

    <div className="App">
      <div className="smurf-container">
        
        <button className='getBtn' onClick={props.getSmurfs}>See Smurfs</button>
      
        </div>
      <FormikUserForm sendSmurfs={props.sendSmurfs} sent={props.sent}/>
    </div>

  )

}

const mapStateToProps = state => {
  return {
    gotten: state.gotten,
    getting: state.getting,
    sent: state.sent
  }
}

export default connect(mapStateToProps, { getSmurfs, sendSmurfs })(App)
