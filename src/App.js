import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import NavBar from './Components/Navbar/Navbar';
import Home from "./Pages/Home"
import Media from './Pages/Media';
import Weather from './Pages/Weather';
import Footer from './Components/Footer/Footer';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
function App()
{
  return (
    <>
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/media" component={Media} />
          <Route exact path="*" component={Home} />
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
