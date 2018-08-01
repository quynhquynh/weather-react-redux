import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    onInputChange = e => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input 
                    placeholder='get a five-day forecast in your favorite cities'
                    value={this.state.term}
                    onChange={this.onInputChange} type='text'/>
                <span>
                    <button type='submit'>Submit</button>
                </span>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)