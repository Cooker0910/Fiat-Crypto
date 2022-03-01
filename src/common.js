import { useLocation, useNavigate } from 'react-router-dom';

function RedirectUri (url, data) {
  const userdata = useLocation();
  const navigate = useNavigate(); 

  let userID = userdata.search.split('?post=');
  userID = userID[1];

  console.log('userId common js---', userID);

  let postData = userID ? userID : data?.details?._id;

  if (userID == undefined) {
    navigate({pathname: url, state: data});
  } else {
    navigate({pathname: url, state: data, search: `?post=${postData}`});
  }

}

export default RedirectUri;