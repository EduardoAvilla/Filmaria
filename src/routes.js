import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'
import Error from './pages/Error'
const Routes= () =>{

return(

    <BrowserRouter>
    <Header/>
    <Switch>

        <Route exact path="/" component={Home}></Route>
<Route exact path="/filme/:id" component={Filme}></Route>
<Route exact path="/favoritos" component={Favoritos}></Route>
<Route path="*" component={ Error}></Route>

    </Switch>
    
    </BrowserRouter>
)

}

export default Routes;