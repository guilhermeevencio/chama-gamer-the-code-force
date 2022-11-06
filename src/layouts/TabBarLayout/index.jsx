import React from 'react'
import { Outlet } from 'react-router-dom'
import TabBar from '../../components/TabBar'

export function TabBarLayout() {
  return (
    <div>
      <Outlet />
      <TabBar />
    </div>
  )
}
