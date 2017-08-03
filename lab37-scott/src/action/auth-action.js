import superagent from 'superagent';

export const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDestroyOnLogout = () => ({
  type: 'TOKEN_DESTROYONLOGOUT',
});

//start the async requests

export const signupRequest = (user) => (dispatch) => {
  console.log('hit sign up');
  return superagent.post(`${__API_URL__}/signup`)
    .withCredentials()
    .send(user)
    .then(res => {
      console.log('token: ', res.text);
      dispatch(tokenSet(res.text));
      //put the token in local storage
      try{
        console.log('break 5');
        localStorage.token = res.text;
      } catch(err){
        console.log('error: ', err);
        // return err;
      }
      return res;
    });
};
