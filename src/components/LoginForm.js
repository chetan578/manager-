import React,{Component} from 'react'
import {Text,View} from 'react-native'
import {Card,Input,CardSection,Button} from './common'
import {connect} from 'react-redux'
import {emailChanged,passwordChanged,loginUser} from '../actions'


class LoginForm extends Component{

onEmailChange(text){
this.props.emailChanged(text)

}
onPasswordChange(text)
{
	this.props.passwordChanged(text)
}
onButtonPress()
{
const {email ,password}= this.props
this.props.loginUser({email,password})

}
renderError()
{
	if(this.props.error){
		return
		(
			<View style={{backgroundColor:'white'}}>
			<Text style={styles.errorTextStyle}>
			{this.props.error}
			</Text>
			</View>
			)
	}
}
render()
{
	return(
		<Card>
		<CardSection>
		<Input
		label="email"
		placeholder="email@gmail.com"
		onChangeText={this.onEmailChange.bind(this)}
		value={this.props.email}
		/>
		</CardSection>

		<CardSection>
		<Input 
		label="password"
		placeholder="password"
		secureTextEntry
		onChangeText={this.onPasswordChange.bind(this)}
		value={this.props.password}
		/>
		</CardSection>

	{this.renderError()}

		<CardSection>
		<Button text={"Log In"}
		onPress={this.onButtonPress.bind(this)}
		/>
		</CardSection>

		</Card>
		)
}
}

const styles={
	errorTextStyle:{
		fontSize:20,
		color:'red',
		alignSelf:'center'
	}
}
const mapStateToProps=state=>{
	return{
		email:state.auth.email,
		password:state.auth.password,
		error:state.auth.error
	}
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm)