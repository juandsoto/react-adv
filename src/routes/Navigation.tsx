import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';

import logo from '../logo.svg';

import { routes } from './routes';

export const Navigation = () => {
  return (
    //que mostrar mientras se cargan los componentes ? Suspense
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={name}>
                  <NavLink to={path} activeClassName='nav-active'>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ name, path, component: Component }) => (
              <Route
                key={name}
                path={path}
                render={() => {
                  return <Component />;
                }}
              />
            ))}
          </Switch>
          <Redirect to={routes[0].path} />
        </div>
      </Router>
    </Suspense>
  );
};
