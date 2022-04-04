import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import Icon from '@mdi/react';
import { mdiArrowLeftThin } from '@mdi/js';
import './styles.css';

function Login() {
  return (
    <Fragment>
        <div className="login-section_ container">
            <div className="register">
                <div className="joinAp">
                    <form className=" login_form col s12 m12">
                        <h3 className="h3_" id='login-id' style={{textAlign :'center'}}>Sign in to your account</h3>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">email</i>
                                <input id="icon_prefix" name="amil" type="email" className="validate" />
                                <label for="icon_prefix">email</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock</i>
                                <input id="icon_telephone" name="password" type="password" className="validate" />
                                <label for="icon_telephone">password</label>
                            </div>
                        </div>
                        <div className="login_button col s12" id='col-btn'>
                            <button className="btn_login_ btn waves-effect waves-light" id ="btn-login" type="submit" name="action">Submit</button> 
                        </div>
                        <div className="login_copyrigt col s12 m12">
                            <div className="container">
                                <p>Copyright © 2021-{new Date().getFullYear()} Afternoon Prep - All Rights Reserved</p>
                            </div>
                        </div>
                        <div className='arrow-back'>   
                            <Link to='/'>
                                <Icon path={ mdiArrowLeftThin }
                                    size={1.4}
                                    horizontal
                                    vertical
                                    rotate={180}
                                />{''}<div className='shift-up'>home</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login