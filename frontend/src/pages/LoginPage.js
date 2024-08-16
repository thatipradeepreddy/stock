import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = async (response) => {
    try {
      const token = response.credential;
      console.log('Login Success:', response);

      // You might want to send the token to your backend for validation
      const res = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        const data = await res.json();
        // Store user data and token in local storage or global state
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);

        // Redirect the user to a protected route
        navigate('/portfolio');
      } else {
        throw new Error('Failed to authenticate');
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
    alert('Failed to log in. Please try again.');
  };

  return (
    <div>
      <h1>Login</h1>
      <GoogleOAuthProvider clientId="890279554489-pmkaisons71kk5fkou43jtniuqf0ddf4.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default LoginPage;
