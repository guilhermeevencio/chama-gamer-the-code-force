import { Route, Routes } from 'react-router-dom'
import { TabBarLayout } from './layouts/TabBarLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Shopping } from './pages/Shopping'
import { Login } from './pages/Login'
import { Start } from './pages/Start'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/" element={<TabBarLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shopping" element={<Shopping />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
