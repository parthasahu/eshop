import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api';

export default class UserService { 
    
      async create({ firstName, lastname, email, password, contact }) {
        const url = `${API_BASE_URL}/auth/signup`;
        const body = JSON.stringify({ firstName, lastname, email, password, contact })
        const option = {header: { "Content-Type": "application/json", "Access-Control-Allow-Origin" : "*" }}

        try {
           await axios.post(url, body, option);
           console.log('user created')
        }
        catch (err){
            console.log('signup error: '+err);
        }  
      }

      getUser(id) {
        return 'test user service';
      }
    
}