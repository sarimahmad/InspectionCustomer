/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disableno-alert */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Loader from '../../Components/Loader';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import {BLACK, GREY, ORANGE, PURPLE, RED, WHITE} from '../../helper/Color';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import Header from '../../Components/Headder/header';
import Validations from '../../helper/Validations'
import { SignUpform } from '../../helper/api';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name:'',
      last_name:'',
      number:'',
      country_code:'',
      confirmPassword:'',
      loading: false,
    };
  }
  isFormFilled() {
    let check_first_name = Validations.checkrequired(this.state.first_name);
    let check_last_name = Validations.checkrequired(this.state.last_name);
    let check_email = Validations.checkEmail(this.state.email);
    let check_Phone_number = Validations.checkrequired(this.state.number);
    let check_Country_Code = Validations.check_Country_Code(this.state.country_code);
    let check_Password = Validations.checkPassword(this.state.password);
    let check_confirmmPassword = Validations.checkPassword(
      this.state.confirmPassword,
    );

    if (
      check_first_name &&
      check_last_name &&
      check_email &&
      check_Phone_number &&
      check_Password &&
      check_confirmmPassword &&
      check_Country_Code &&
      this.state.password === this.state.confirmPassword
    ) {
      return true;
    }
    if (!check_first_name) {
      alert('Invalid First Name');
    } else if (!check_last_name) {
      alert('Invalid Last Name');
    } else if (!check_email) {
      alert('Invalid Email');
    } else if (!check_Phone_number) {
      alert('Invalid Phone Number');
    }else if (!check_Country_Code) {
      alert('Invalid Country Code');
    }
     else if (!check_Password) {
      alert('Password Lenght should be Gretaer than 3');
    } else if (!check_confirmmPassword) {
      alert('Password Lenght should be Gretaer than 3');
    } else if (this.state.password !== this.state.confirmPassword) {
      alert('Password Does not Match');
    } 
    return false;
  }

  async SignUpform() {
    this.setState({loading: true});
    let dataToSend = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      country_code: this.state.country_code,
      number: this.state.phone_number,
    
    };
    if (this.isFormFilled()) {
      await SignUpform(dataToSend).then(response => {
        if (response.status === 200 && !response.data.error) {
          // this.props.callApi(
          //   response.data.user,
          //   response.data.access_token,
          //   response.data.user.role,
          // );
          console.log(response);
        } 
        else{
          alert("Some Thing Went Wrong")
        }
      });
    }
    this.setState({loading: false});
  }


  render() {
    return (
      <View
        style={styles.wrapperView}>
            <Header
              leftPress={()=> this.props.navigation.goBack()}
            />
        <SafeAreaView style={{flex: 1}}>
        <View style={{flex:1,paddingHorizontal:20 ,borderTopRightRadius: 10,borderTopLeftRadius:10}}>

        <Text style={[styles.itemTxt,{marginTop: 30}]}>Sign Up</Text>
        <View style={{height:2, width: 42, backgroundColor:PURPLE.dark, marginTop: 13}}/>
        <Text style={{fontSize: 12, color: '#828282', fontWeight:'500', marginTop: 20}}>Lorem ipsum dolor sit consteur</Text>
        
       

        <View style={{flex:1}}>
        <ScrollView 
        
        style={{flex:1}}>

        <View style={{marginTop: 20}}>
        <Image 
        style={{width: 14, height:17, resizeMode:'contain', position:'absolute', top:17, left: 15}}
        source={require('../../assets/prof.png')}/>
        <TextInput
        style={styles.TextInput}
        placeholder='First name'
        onChangeText={(value)=> this.setState({first_name: value})}
        placeholderTextColor={'lightgrey'}
        />
        </View>


        <View style={{marginTop: 20}}>
        <Image 
        style={{width: 14, height:17, resizeMode:'contain', position:'absolute', top:17, left: 15}}
        source={require('../../assets/prof.png')}/>
        <TextInput
        style={styles.TextInput}
        placeholder='Last name'
        onChangeText={(value)=> this.setState({last_name: value})}
        placeholderTextColor={'lightgrey'}
        />
        </View>

        <View style={[styles.TextInput,{marginTop: 20, paddingLeft: 10 ,flexDirection:'row'}]}>

        <TextInput
        style={{ width: 30}}
        placeholder='+92'
        onChangeText={(value)=> this.setState({country_code: value})}
        placeholderTextColor={'lightgrey'}
        />

        <View
        style={{height: 20, width:1, marginLeft: 20,backgroundColor:"lightgrey"}}
        />


      <TextInput
        style={{ width: '80%', paddingLeft: 20}}
        placeholder='Number'
        onChangeText={(value)=> this.setState({number: value})}
        placeholderTextColor={'lightgrey'}
        />
        </View>


        <View style={{marginTop: 20}}>
        <Image 
        style={{width: 14, height:10.5, resizeMode:'contain', position:'absolute', top:17, left: 15}}
        source={require('../../assets/email.png')}/>
        <TextInput
        style={styles.TextInput}
        placeholder='Email'
        onChangeText={(value)=> this.setState({email: value})}
        placeholderTextColor={' '}
        />
        </View>


        <View style={{marginTop: 20}}>
        <Image 
        style={{width: 12, height:17, resizeMode:'contain', position:'absolute', top:17, left: 15}}
        source={require('../../assets/pass.png')}/>
        <TextInput
        style={styles.TextInput}
        onChangeText={(value)=> this.setState({password: value})}
        placeholder='Set password'
        secureTextEntry={true}
        placeholderTextColor={' '}
        />
        </View>


        <View style={{marginTop: 20}}>
        <Image 
        style={{width: 12, height:17, resizeMode:'contain', position:'absolute', top:17, left: 15}}
        source={require('../../assets/pass.png')}/>
        <TextInput
        style={styles.TextInput}
        onChangeText={(value)=> this.setState({confirmPassword: value})}
        placeholder='Confirm password'
        placeholderTextColor={' '}
        secureTextEntry={true}
        />
        </View>
    
        </ScrollView>
        </View>
    
        

        <View style={{flex:0.3 ,justifyContent:'flex-end'}}>
            <TouchableOpacity 
            onPress={()=> this.SignUpform()}
            style={styles.Btn}>
            <Text style={[styles.itemTxt,{fontSize: 12, color:'white'}]}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={{fontSize: 12, marginBottom: 20 ,textAlign:'center',color: '#828282', fontWeight:'500', marginTop: 20}}>Don’t have an account? <Text 
            onPress={()=> this.props.navigation.navigate("Login")}
            style={[styles.itemTxt,{fontSize:12}]}>Login.</Text></Text>
        </View> 
        </View>

        </SafeAreaView>
        {this.state.loading && <Loader loading={this.state.loading} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor:'white'
  },

  itemTxt:{
    fontSize:34,
    fontWeight:'bold',
    color: '#282461'
  },
  TextInput:{
      width: '100%',
      height: 45,
      borderWidth: 1,
      borderColor: 'lightgrey',
     alignItems:'center',
     borderRadius: 10,
     paddingLeft: 40
  },
  Btn:{
    width: '100%',
    height: 45,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#282461',
    borderRadius: 10,
  }
});
function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
    role: state.user.role,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, access_token, role) =>
      dispatch(userActions.setUser({user, access_token, role})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
