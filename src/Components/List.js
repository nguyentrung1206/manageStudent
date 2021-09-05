import React,{Component} from 'react'
import './Form.css'

 
class List extends Component{ 
   constructor(props) {
      super(props)
      console.log(this.props);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
   }
   handleEdit =() => {

   }
   handleDelete = (index) => {
     
   }
   render() {
   return(
      <div className = 'user-list '>
        <h2>User list</h2>
        <table cellpacing={0} border={1} width={500} cellPadding={0}>
          <thead>
              <tr  className='item'>
                 <th>Name</th>
                 <th>Phone</th>
                 <th>Email</th>
                 <th>Address</th>
                 <th>action</th>
              </tr>
           </thead>
           <tbody>
           {
            this.props.Students?.length > 0 && this.props.Students?.map((stu,index) => {
               return (
               <tr key={index}>
                 <td>{stu.studentName}</td>
                 <td>{stu.studentPhone}</td>
                 <td>{stu.studentEmail}</td>
                 <td>{stu.studentAddress}</td>
                 <td> 
                     <button onClick={this.handleEdit}>edit</button>
                     <button onClick={this.handleDelete}>delete</button>
                 </td>
              </tr>
                  )
            })
           }
              
           </tbody>
        </table>
      </div>
      );
   }
}
export default List;