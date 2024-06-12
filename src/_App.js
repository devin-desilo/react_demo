
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import {
  LoginSocialLinkedin
} from 'reactjs-social-login';



// REDIRECT URL must be same with URL where the (reactjs-social-login) components is locate
// MAKE SURE the (reactjs-social-login) components aren't unmounted or destroyed before the ask permission dialog closes
const REDIRECT_URI = window.location.href;

const App = () => {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)
  const [profileData, setProfileData] = useState(null);


  const onResolve = async (data) => {
    console.log('resolve in linkedIn', data)
    // try {
    const accessToken = data.access_token; // Assuming the access token is stored in 'data'

    // Make request to LinkedIn API to fetch user profile
    const response = await axios.get(`http://192.168.1.2:3000/api/v1/auth/linkedin/callback?access_token=${accessToken}`, {
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      //   'cache-control': 'no-cache',
      //   'Access-Control-Allow-Origin': '*',
      //   'X-Restli-Protocol-Version': '2.0.0'
      // }
    });

    console.log('response', response.data)
    // Extract relevant data from the API response
    // const { localizedFirstName, localizedLastName, profilePicture } = response.data;

    // Extract email from a separate API call
    // const emailResponse = await axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //     'cache-control': 'no-cache',
    //     'X-Restli-Protocol-Version': '2.0.0'
    //   }
    // });

    // console.log('response email', emailResponse)

    // const email = emailResponse.data.elements[0]['handle~'].emailAddress;

    // // Set profile data in state
    // setProfileData({
    //   firstName: localizedFirstName,
    //   lastName: localizedLastName,
    //   email: email,
    //   profilePicture: profilePicture['displayImage~'].elements[0].identifiers[0].identifier
    // });
    // } catch (error) {
    //   console.error('Error fetching profile:', error);
    // }
    console.log('out')
  };
  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])


  console.log('linkedIn profile', REDIRECT_URI)
  return (
    <>
      {provider && profile ? (
        <>Logged in</>
      ) : (
        <div className={`App ${provider && profile ? 'hide' : ''}`}>
          <h1 className='title'>ReactJS Social Login</h1>




        </div>
      )}
    </>
  )
}

export default App