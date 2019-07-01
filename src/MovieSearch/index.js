import React, {Component} from 'react'

class MovieSearch extends Component {
	constructor(props){
		super(props);
		this.state = {
		title: '',
		description: ''
		}
	}

	compoenentDidMount(){
		this.handleSubmit()
	}


	handleSubmit = async(e) => {
		e.preventDefault();
		try{
			
			const response = await fetch( process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/plot/${this.state.title}`, {
				method: 'GET',
				credentials: 'include'
			})
		 	
		 	let movieParsed = await response.json();
			
			if(movieParsed.status === 404){
				this.setState({
					description: movieParsed.message
				})
				this.props.handleDesc(this.state.description)
			}
			else if(movieParsed.status === 200){
				this.setState({
					description: movieParsed.data
				})
				this.props.handleDesc(this.state.description)
			}

		}catch(err){
			console.log('Failed')
		}
	}

	handleChange = (e) => {
		this.setState({
			title: e.target.value
		})
	}



	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<h2>search movie <i class="fas fa-search"></i></h2>
				<input type="title" onChange={this.handleChange} placeholder="name of movie"/>
				<button>Search</button>
			</form>
		)
	}
}

export default MovieSearch