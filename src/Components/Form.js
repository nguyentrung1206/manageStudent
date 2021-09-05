import React, {Component} from 'react'
import './Form.css'
import List from './List.js'

class Form extends Component{	
	constructor(props) {
		super(props)
		this.state = {Students : []};
		 this.handleSubmit = this.handleSubmit.bind(this);
		 this.handleChange = this.handleChange.bind(this);
		 
	}
	 handleChange = (event) => {

	 	this.setState({
	      [event.target.name]: event.target.value
	    });
	 }
  	handleSubmit = (event) => {
  		event.preventDefault();
  		
  		const user = {studentEmail: this.state.studentEmail, studentName: this.state.studentName, studentPhone: this.state.studentPhone, studentAddress: this.state.studentAddress};
  		let students = this.state.Students || [];
  		students.push(user);
  		this.setState({Students: students});
  	}
  	
  	handleReset = (event) => {
  		event.preventDefault();
  		   this.setState({Students:  ''});
  		
 		  
  	}
	render() {
		
		return(
			<div className= 'container'>
		        

		        <form action="" onSubmit={this.onSubmit}>
		        <h2>Register</h2>
		          <div className = "form-group">
		            <lable htmlFor= "fullname"> Fullname</lable>
		            <input type="text" id="fullname" name="studentName" value = {this.state.studentName} onChange={this.handleChange}/>
		          </div>
		         <div className = "form-group">
		            <lable htmlFor = "email">Email</lable>
		            <input type="text" id="email" name="studentEmail" value = {this.state.studentEmail} onChange={this.handleChange} />
		          </div>
		          <div className = "form-group">
		            <lable htmlFor="phone">Phone</lable>
		            <input type="text" id="phone" name="studentPhone" value = {this.state.studentPhone} onChange={this.handleChange} />
		          </div>
		          <div className = "form-group">
		            <lable htmlFor="address">Address</lable>
		            <input type="text" id="address" name="studentAddress" value = {this.state.studentAddress} onChange={this.handleChange}/>
		          </div>
		           <div className = "form-group">
		            
		            <button onClick={this.handleSubmit}>Register</button>
		            <lable >&nbsp;</lable>
		            <button onClick={this.handleReset}>Reset</button>
		          </div>
		        </form>		            	  	 						
		      
		      
		   <List 
		   	Students={this.state.Students}
		  />)}
							  
	      </div>
		);
	}
}
export default Form;