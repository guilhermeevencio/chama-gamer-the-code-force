import React from 'react'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import TabBar from '../../components/TabBar'

export function TabBarLayout() {
  return (
    <div className={styles.tabBar}>
      <Outlet />
      <TabBar />
    </div>
  )
}
