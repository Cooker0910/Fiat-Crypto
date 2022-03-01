import './profile.css';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { getUserData } from '../../../api';

function Profile() 
{
  const [userDetails, setUserDetails] = useState({});
  const userdata = useLocation();
  let userID = userdata.search.split('?post=');
  userID = userID[1];

  useEffect(async ()=> {
    const response = await getUserData({id: userID});
    setUserDetails(response.result);
    console.log('userDetails---', userDetails);
  }, []);

  return ( 
    <section className='welcome'>
      <div className="container bootstrap snippet">
        <div className="row"> <div className="col-sm-10"><h1>Profile</h1></div></div>
        <div className="row"> <div className="col-sm-9">
          <div className="tab-pane active"> <hr />
            <form className="form" id="registrationForm">
              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>First name</h4></label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                    value={userDetails?.name}
                    placeholder="first name"
                    title="enter your first name if any."
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>Last name</h4></label>
                  <input type="text" className="form-control" name="last_name" id="last_name" value={userDetails?.lname} placeholder="last name" title="enter your last name if any." />
                </div>
              </div>
        
              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>Mobile</h4></label>
                  <input type="text" className="form-control" name="mobile" id="mobile" value={userDetails?.phone} placeholder="enter phone" title="enter your phone number if any." />
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>Email</h4></label>
                  <input type="email" className="form-control" disabled name="email" id="email" value={userDetails?.email} placeholder="you@email.com" title="enter your email." />
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-6">
                  <label><h4>Location</h4></label>
                  <input type="email" className="form-control" id="location" value={userDetails?.location} placeholder="somewhere" title="enter a location" />
                </div>
              </div>

              <div className="form-group">
                  <br />
                  <p class="signin button"> 
                    <input type="button" className="col-md-3" value="Update"/> 
                  </p>
                  {/* <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button> */}
                  {/* <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>  
    </section>
    );
}

export default Profile;