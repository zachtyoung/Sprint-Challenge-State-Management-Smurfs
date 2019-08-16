import React from 'react'
import { connect } from 'react-redux'

const Smurf = props => props.smurf.map(smurf => <div className="user-form"><h1>{smurf.name}</h1><h2>{smurf.age}</h2><h3>{smurf.height}</h3></div>)

const mapStateToProps = state => {
    return {
        smurf: state.smurf
    }
}

export default connect(mapStateToProps)(Smurf)