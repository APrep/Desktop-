import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import icon from '../../images/icon.JPG';
import Icon from '@mdi/react';
import { mdiCheckboxMultipleMarkedOutline } from '@mdi/js';
import './styles.css';

const Homepage = e => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            var elems = document.querySelectorAll('.slider');
            M.Slider.init(elems, {
                indicators	: false
            });
            
        },500)
        return () => {
            clearTimeout(timer); 
        }
    }, []);

  return (
    <div className="root">
        <div className="row row_">
            <div className="for_h2 col s12 m8 8">
                <h2 className="h_2">@ <img src={icon} className="image_ico"></img> Afternoon Prep, we priotize Making learning very much accessible,interactive, and collaborative. </h2>
                <div className="check_box row">
                    <div className="for_icon col s12 m4 4">
                        <div className="sift1">
                            <Icon path={ mdiCheckboxMultipleMarkedOutline }
                                size={2.0}
                                horizontal
                                vertical
                                rotate={180}
                                color="#E8F8F5"
                            />
                            <div className="jamb-prep-holder">
                                <h6 className="jambprep">JAMB Prep</h6>
                            </div>
                        </div>
                        <div className="shift2">
                            <Icon path={ mdiCheckboxMultipleMarkedOutline }
                                size={2.0}
                                horizontal
                                vertical
                                rotate={180}
                                color="#E8F8F5"
                            />
                            <div className="jamb-prep-holder">
                                <h6 className="jambprep">NECO Prep</h6>
                            </div>
                        </div>
                        <div className="shift3">
                            <Icon path={ mdiCheckboxMultipleMarkedOutline }
                                size={2.0}
                                horizontal
                                vertical
                                rotate={180}
                                color="#E8F8F5"
                            />
                            <div className="jamb-prep-holder">
                                <h6 className="jambprep">WAEC Prep</h6>
                            </div>
                        </div>
                        <div className="shift4">
                            <Icon path={ mdiCheckboxMultipleMarkedOutline }
                                size={2.0}
                                horizontal
                                vertical
                                rotate={180}
                                color="#E8F8F5"
                            />
                            <div className="jamb-prep-holder">
                                <h6 className="jambprep">And More...</h6>
                            </div>
                            <Link to ='/login' className="btn_l btn waves-effect waves-light" type="submit" name="action">Sign in</Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-section col s4 m4 4">
                <div className="register">
                    <div className="joinAp">
                        <h3 className="h3_" style={{textAlign :'center'}}>Join Afternoon Prep</h3>
                        <div class="row">
                            <form class=" _form col s12 m12 12" >
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">email</i>
                                        <input id="icon_prefix" name="amil" type="email" class="validate" />
                                        <label for="icon_prefix">email</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">lock</i>
                                        <input id="icon_telephone" name="password" type="password" class="validate" />
                                        <label for="icon_telephone">password</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">lock</i>
                                        <input id="icon_telephone2" name="password2" type="password" class="validate" />
                                        <label for="icon_telephone2">confirm password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="login_button col s12 m12">
                                        <button className="btn_login_ btn waves-effect waves-light" type="submit" name="action">JOIN Afternoon PREP</button> 
                                    </div>
                                </div>
                                <div className="login_copyrigt col s12 m12">
                                    <div className="container">
                                        <p>Copyright © 2021-{new Date().getFullYear()} Afternoon Prep - All Rights Reserved</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage;