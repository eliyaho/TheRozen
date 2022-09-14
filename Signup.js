import React, { useState } from "react";
import axios from "axios";
import { Grid, Paper, Avatar, TextField, Button, MenuItem, InputLabel, FormControl, Box, Select } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import  ArrayRoles from './ArrayRole';
import SelectMaterialToSignUp from './SelectMaterialToSignUp';

const Login = (props) => {

    const [UserName, SetUserName] = useState(null);
    const [Password, SetPassword] = useState(null);
    const [Permission, SetPermission] = useState('');

    const paperStyle = { width: 340, height: "61vh", top: "16%", left: "34%", position: "absolute", padding: 20 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const BtnSignUpStyle = { margin: '10px 0' }


    const InputLabelChange = (event) => {
        SetPermission(event.target.value);
    };
    const UserNameChange = (event) => {
        SetUserName(event.target.value)
    };
    const PasswordChange = (event) => {
        SetPassword(event.target.value)
    };
    const Names = [
        "admin",
        "Instructor",
        "trainee",
    ];

    const submitSignup = async e => {
        e.preventDefault();
        axios.post('http://localhost:8000/auth/signup', { username: UserName, password: Password, role: Permission })
            .then(response => {
                console.log(response.data);
            });
        console.log(UserName, Password, Permission);
    }

    return (
        <React.Fragment>
            <div className="signup-form">
                <form onSubmit={e => submitSignup(e)}>
                    <Grid align='center' >
                        <Paper style={paperStyle} elevation={10} >
                            <Grid align='center'>
                                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                                <h2>הוספת משתמשים</h2>
                            </Grid>
                            <TextField label='Username' placeholder='Enter username' onChange={UserNameChange}  fullWidth required />
                            <TextField label='Password' placeholder='Enter password' onChange={PasswordChange}  type='password' fullWidth required />
                            <Box sx={{ minWidth: 120 }}>
                                {/* <SelectMaterialToSignUp></SelectMaterialToSignUp> */}
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" >Role</InputLabel>
                                    <Select labelId="demo-simple-select-label " id="demo-simple-select" onChange={InputLabelChange} >
                                        {Names.map((name) => { return (<MenuItem key={name} value={name} >{name}</MenuItem>) })}
                                        {/* {Object.values(ArrayRoles.default).map((course) => { return( <MenuItem key={course.length} value={course.length} >{course}</MenuItem> ) })}   */}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Button type='submit' color='primary' variant="contained" style={BtnSignUpStyle} fullWidth>Sign up</Button>
                        </Paper>
                    </Grid>
                </form>
            </div>
        </React.Fragment>
    )

};

export default Login;