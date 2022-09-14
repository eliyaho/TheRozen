import React, { useContext, useState } from "react";
import axios from "axios";
import { Grid, Paper, Avatar, TextField, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext";

export function Login() {

    const { ResAccessTokenAndRole, SetResAccessTokenAndRole } = useContext(AuthContext);

    const [userName, SetUserName] = useState(null);
    const [password, SetPassword] = useState(null);
    const paperStyle = { width: 340, height: "61vh" ,top: "16%", left: "34%", position: "absolute", padding: 20 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const BtnSignInStyle = { margin: '30px 0' }

    const Navigate = useNavigate();

    // Input Name & Password
    const UserNameChange = (event) => {
        SetUserName(event.target.value)
    };
    const PasswordChange = (event) => {
        SetPassword(event.target.value)
    };

    // Change to function 
     const submitLogin = async e => {
        e.preventDefault();
        await axios.post('http://localhost:8000/auth/login', { username: userName, password: password })
            .then(response => {
                SetResAccessTokenAndRole(response.data);
                if (response.data.role == "Admin") {
                    Navigate("/signup")
                } else if (response.data.role == "Technician") {
                    Navigate("/Technician")
                } else if (response.data.role == "Trainee") {
                    Navigate("/Trainee")
                }
                
            });
        console.log(userName, password);
    }
 
    return (
        <React.Fragment>
            <div className="login-form">
                <form >
                    <Grid align='center' >
                        <Paper elevation={10} style={paperStyle}>
                            <Grid align='center'>
                                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                                <h2>כניסה </h2>
                            </Grid>
                            <TextField label='Username' placeholder='Enter username' onChange={UserNameChange} fullWidth required />
                            <TextField label='Password' placeholder='Enter password' onChange={PasswordChange} type='password' fullWidth required />
                            <Button type='submit' color='primary' variant="contained" style={BtnSignInStyle} onClick={ e => submitLogin(e)} fullWidth>Login</Button>
                        </Paper>
                    </Grid>
                </form>
            </div>
        </React.Fragment>
    )


}
export default Login;