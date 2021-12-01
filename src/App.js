import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import NotFound from './Pages/Error/NotFound/NotFound';
import ContactForm from './Pages/Landing/ContactForm/ContactForm';
import Home from './Pages/Landing/Home/Home';
import Services from './Pages/Landing/Services/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import DashboardHome from './Pages/User/Dashboard/DashboardHome/DashboardHome';
import Login from './Pages/User/Login/Login';
import Registration from './Pages/User/Registration/Registration';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <ContactForm></ContactForm>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>

            <Route path="/dashboard">
              <DashboardHome></DashboardHome>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
