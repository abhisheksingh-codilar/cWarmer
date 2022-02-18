import { PureComponent } from 'react';
import LoginPageComponent from "./LoginPage.component";

export default class LoginPageContainer extends PureComponent {

    state = {
        usernameValue:"",
        passwordValue:"",
        unameempty:false,
        pempty:false,
        formCompleted:false
        
    }

    containerFunctions = {
        onSubmit: this.onSubmit.bind(this),
       valueHandlerUsername:this.valueHandlerUsername.bind(this),
       valueHandlerPassword:this.valueHandlerPassword.bind(this)
    }

    
    onSubmit(event) {
        event.preventDefault();

        if(this.state.usernameValue.length == 0){
            this.setState({unameempty:true,formCompleted:false})
           
        }
        if(this.state.passwordValue.length == 0){
            this.setState({pempty:true,formCompleted:false})
        }

        if(this.state.usernameValue.length!=0 && this.state.passwordValue.length!= 0 ){
            this.setState({usernameValue:"",passwordValue:"",formCompleted:true})
        }

    }

    valueHandlerUsername(event){
        this.setState({usernameValue:event.target.value,unameempty:false,formCompleted:false})

    }
    valueHandlerPassword(event){
        this.setState({passwordValue:event.target.value,pempty:false,formCompleted:false})

    }

    render() {
        return (
            <LoginPageComponent
                { ...this.state }
                { ...this.containerFunctions }
            />
        )
    }

}