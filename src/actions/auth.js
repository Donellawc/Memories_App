import { AUTH } from "../constants/actionTypes";
import * as api from '../api/index.js';

 const signin = (formData, router) => async  (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
    
        dispatch({ type: AUTH, data });
    
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    };
    
    const signup = (formData, router) => async (dispatch) => {
      try {
        const { data } = await api.signUp(formData);
    
        dispatch({ type: AUTH, data });
    
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    };
   module.exports = {signin, signup}     
