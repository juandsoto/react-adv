import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;
interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

//LAZYLOAD
// La idea es colocarle diferente nombre a cada chunk

// const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1'));

export const routes: Route[] = [
  {
    path: '/lazyload',
    component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')),
    name: 'LazyLoading Nested',
  },
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'NoLazyLoading',
  },
];
