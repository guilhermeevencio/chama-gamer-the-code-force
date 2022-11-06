import { Route, Routes } from 'react-router-dom'
import { TabBarLayout } from './layouts/TabBarLayout'
import { Home } from './pages/Home'
import { Shopping } from './pages/Shopping'
import { Login } from './pages/Login'
import { Start } from './pages/Start'
import { PageNotImplemented } from './components/NotImplemented'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/" element={<TabBarLayout />}>
        <Route path="/cards" element={<PageNotImplemented />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payments" element={<PageNotImplemented />} />
        <Route path="/profile" element={<PageNotImplemented />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/not-implemented" element={<PageNotImplemented />} />
      <Route path="/login" element={<Login />} />
      <Route path="/actions" element={<PageNotImplemented />} />
    </Routes>
  )
}
