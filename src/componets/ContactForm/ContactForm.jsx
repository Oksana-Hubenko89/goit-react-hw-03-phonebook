
import React, { Component } from 'react';
import Container from "../Container";
//import 'react-native-get-random-values';
//import Button from "../Button";
import b from "../Button/Button.module.css";
import s from "./ContactForm.module.css";


class ContactForm extends Component {
    
    static defaultProps = {
    //  
  }
  static propTypes = {
   //
  }

    state = {
        name: '',
        number: ''
    }
   
    handleInputChange = event => {
        const { name, value } = event.currentTarget;
           this.setState({
          [name]: value
       });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state)
        this.reset(); 
    };
    
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    };

    render(){ 
    
        const { name, number } = this.state;

        return (
            
        <Container>
            <form className={s.Form} onSubmit={this.handleSubmit}>
                <label>
                  Name <br/> <input type="text" name="name" value={name} onChange={this.handleInputChange }/>
                </label>
                <br/>
                <label>
                  Number <br/> <input type="tel" name="number" value={number} onChange={this.handleInputChange}/>
                </label>
                <br/>
                {/* <Button type="submit" >Add contact</Button> */}
                <button className={b.Button} type='submit'>Add contact</button>
       
            </form>
            
       </Container>
        )
    }      
};

export default ContactForm;
