import React, {Component} from 'react'
import Weather from "../Weather"
import MyMovie from "../MyMovie"

class UserCollection extends Component{
	constructor(){
		super();

		this.state = {
			mymovies:[],
			showMovieCollection: false
		}

		this.handleDelete = this.handleDelete.bind(this)
	}

	componentDidMount(){
		this.getWeather()
		this.getMovie();
	};

	getWeather = async() => {
    	try{
    	  const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/weather/in/chicago`, {
      	  	method:"GET",
       	  	credentials:"include"
     	  })
      
      		if(response.status == 200){
        		const dataParsed = await response.json()
        	
        		this.setState({
          			 fahren: dataParsed.fahren,
         			 cels: dataParsed.cels,
         			 weatherCondit: dataParsed.weatherCondit
       			})
     		}
     		else {
        		console.log('something went wrong')
     		}   
    	}
    	catch(err){
      		console.log(err)
    	}
  	}

	getMovie = async() => {
		try{
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/chicago-cinema/mylist', {
				method: 'GET',
				credentials: 'include'
			})

			if(response.status == 200){
				console.log('you just get list of your collection')
				const movieParsed = await response.json();

				this.setState({
					mymovies: movieParsed.data,
					showMovieCollection: true
				})
			}

			console.log(this.state.movies)
		}catch(err){
			console.log(err)
		}
	}

	handleDelete = async(e) => {
		e.preventDefault()
		
		let movieId = await e.target.dataset.id;
		try{	
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/myMovie/${movieId}`, {
				method: 'DELETE',
				credentials: 'include'
			})
			
			this.setState({mymovies: this.state.mymovies.filter((movie, i) => movie._id !== movieId)});

			
		}catch(err){
			console.log('failed to delete')
		}
	}

		

	render(){
		const movieCollection = this.state.mymovies.map((movie, i) => {
			return(
				<tbody key={i}>
					<MyMovie handleDelete={this.handleDelete} key={i} movie={movie}/>
				</tbody>
			)
		})
		return(
			<div className="row movie_list">
				<div className="col-lg-12">
					<div className="row">
						
						<div className="col-lg-4 my-auto">
							<h3>Saved List</h3>
						</div>
						
						<div className="col-lg-4">
						</div>
						
						<div className="col-lg-4">
							{ 
								this.state.weatherCondit ?
            					<Weather fahren={this.state.fahren} cels={this.state.cels} weatherCondit={this.state.weatherCondit}/> 
          						:null 
          					}
						</div>

					</div>
					<table className="table">
						<tbody>
						<tr className="main">
							<th>Movie</th>
							<th>Date</th>
							<th>Address</th>
							<th>Park</th>
							<th>Action</th>
						</tr>
						</tbody>
						{movieCollection}
					</table>
				</div>
			</div>
		)
	}
}

export default UserCollection