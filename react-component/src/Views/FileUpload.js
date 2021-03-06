import axios from 'axios'; 
import './results.css';
import React,{Component} from 'react'; 
import { Link, Switch, Redirect, Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Results from './Results'
  
class FileUpload extends Component { 
   
    state = { 
        selectedFile: null,
        status: false
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
          this.setState({ 
            selectedFile: URL.createObjectURL(event.target.files[0])
          }); 
    }; 
    
    // backend api stuff ???????????
    onFileUpload = () => { 

      // Create an object of formData 
      // const formData = new FormData(); 
     
      // // Update the formData object 
      // formData.append( 
      //     "myFile", 
      //     this.state.selectedFile, 
      //     this.state.selectedFile.name
      //   ); 
     
      // Details of the uploaded file 
      var file = document.getElementById('fileItem').files[0];

      console.log(this.state.selectedFile); 
      console.log(file);
      this.setState({status: true})
     
      // Request made to the backend api 
      // Send formData object 
      // axios.post("api/uploadfile", formData); 
    }; 
     
    content = () => {
        if (this.state.selectedFile && this.state.status) {  // if file is uploaded, redirect to results page
            return(
                <div> 
                <Switch>
                <Redirect from='/' to='/results'/>
                <Route path='/results'>
                  <Results image={this.state.selectedFile}/>
                </Route>
                </Switch>
                </div>  
            )

        } else { // else display upload page
            return (
            <Container className="m-5">
              <div className="container">
                <Button variant="success" href="/login">Log In</Button>{' '}
                <Button variant="success" href="/signup">SignUp</Button>{' '}
              </div>
            
            <div className="green-box"> 
              <h1 style={{textAlign: "center"}}>AppName</h1>
            </div>            
            <div>
                <input
                  id="fileItem"
                  type="file"
                  label="Upload your skin lesion!"
                  custom
                  onChange={this.onFileChange}/>
                  <Button variant="success"onClick={this.onFileUpload}> 
                  Upload! 
                </Button> 
            </div>

            </Container>
            )
        }
    }
     
    render() { 
      return ( 
        <div> 
            {this.content()}
        </div> 
      ); 
    } 
  } 
  
  export default FileUpload; 