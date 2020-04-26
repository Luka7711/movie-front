import React from 'react'
import img from '../images/wall.jpeg'
import { Link } from 'react-router-dom'

const style={
	container:{
		background:`url(${img})`,
		backgroundColor:"#f2f3f0",
		height:"90vh"
	},
	content:{
		marginTop:"13rem"
	},
	parag:{
		marginTop:"2rem"
	}

}

const Home = () => {
	return(
			<div style={style.container} className="row">
				<div className="col-lg-6" style={style.content}>
					<h1>Welcome to Cinematica</h1>
					<h6 style={style.parag}>- Experience to watch movies with your close in your favorite park.</h6>
					<Link type="button" className="btn btn-success" to="/home">Proceed</Link>
				</div>
			</div>
	)
}

export default Home