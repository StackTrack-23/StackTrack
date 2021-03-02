// Oauth initial step
import querystring from 'querystring';

function getGoogleAuthURL() {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  const options = {
    redirect_uri: 'http://localhost:8080/job/auth/google',
    client_id:
      '74812266400-tgc2tfl6hjpe5g4rmp69lsu0kmue6jvb.apps.googleusercontent.com',
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  return `${rootUrl}?${querystring.stringify(options)}`;
}

// client secret O1wcXkAi-lZ6Nogu_WXTFo1v

// ('https://accounts.google.com/o/oauth2/auth?approval_prompt=force&scope=https://mail.google.com/&client_id=74812266400-tgc2tfl6hjpe5g4rmp69lsu0kmue6jvb.apps.googleusercontent.com&redirect_uri=http://localhost:8080/job&response_type=code&access_type=offline&state=<userid>');
