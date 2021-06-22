import * as React from 'react'
import {
    Link,
    Route,
    BrowserRouter,
    Switch,
    useLocation,
} from 'react-router-dom'

const About = () => <div data-testid="location-about">You are on the about page</div>
const Home = () => <div data-testid="location-home">You are home</div>
const NoMatch = () => <div>No match</div>

const LocationDisplay = () => {
    const location = useLocation()

    return <div data-testid="location-display">{location.pathname}</div>
}

const AppRouter = () => (
    <BrowserRouter>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route>
                <NoMatch />
            </Route>
        </Switch>

        <LocationDisplay />
    </BrowserRouter>
)

export {
    LocationDisplay,
    AppRouter,
  }
