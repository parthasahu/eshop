import { createContext } from 'react';
import UserService from './components/auth/services/user-service';

const services = {
  userService: new UserService()
};
const AppContext = createContext();
const { Provider } = AppContext;
const AppProvider = ({ children }) => {
  return <Provider value={{ services }}>{children}</Provider>;
};
export { AppContext, AppProvider }