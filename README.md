# Login and Register system (client)

Authenticating users is one of the important things in most projects and we can't deny the importance of it and it's extremely essential. so, it's the best practice if we can understand the concept of how an Authentication system is built.
in this project, I have implemented the whole process of Logging & Registering users with both a traditional approach using forms and some third-party apps like Google, GitHub, and Twitter. using OAuth (open authorization) options besides your local authorization forms can persuade users to trust your app and use it in an easier way and without any worries about exposing their password.
we will show the user profile info after the Login process and they're able to upload their photo for their profile picture.

> **Note:** This project also has a [back-end source code](https://github.com/mohammadrz003/login-register-system-server_p) that is built with node.js and this project it's matched with it.

### Screenshots

_Home page_

![homepage(beforelogin)](https://github.com/mohammadrz003/login-register-system-client_p/blob/master/screenshots/homepage%28before%20login%29.png?raw=true)

_Sing up & Sing in_

![enter image description here](https://github.com/mohammadrz003/login-register-system-client_p/blob/master/screenshots/signuppng.png?raw=true)

_User profile_

![enter image description here](https://github.com/mohammadrz003/login-register-system-client_p/blob/master/screenshots/profile.png?raw=true)

### What technologies I used:

- [React.js](https://reactjs.org/)
- [React router](https://reactrouter.com/en/main)
- [Formik](https://formik.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### How to install and run the project:

install dependencies using _npm_

    npm install

start the project by running:

    npm start

### Project set up:

pay attention to the `.env` file which is located in the project's root.
there are some variables that are for setting API endpoint and server URL and so on.
you can change them with your custom values.

    REACT_APP_API_BASE_URL=<your-custom-value>
    REACT_APP_SERVER_END_POINT=<your-custom-value>
    REACT_APP_LOCAL_STORAGE_AUTH_KEY=<your-custom-value>

## License

[MIT License](LICENSE)
