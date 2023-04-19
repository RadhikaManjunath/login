import {Component } from "react";
class Password extends Component
{
    render()
    {
        return(
        
            <div class="bg-primary">
                <nav class="navbar bg-success" >
                    <div class="row container">
                        <span class="col-md-6">MERN Stack</span>
                        <span class="col-md-3">Create Student</span>
                        <span class="col-md-3">Student list</span>
                    </div>
                </nav>
        
                <center>
                <h2>Login </h2>
                <table>
                    <tr>
                        <td>Name: </td>
                        <input type="text" />
                    </tr>
                <tr>
                    <td>Password:  </td>
                    <input type="password" />
                </tr>
                <tr>
                    <td>Email: </td>
                    <input type="email" />
                </tr>
                
                    <input type="submit" class="btn  bg-danger"></input>
                
                </table>
                </center>

            </div>
        );
    }
}
export default Password; 