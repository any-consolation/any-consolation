import React, { Component } from 'react'
import AdminUserList from './admin-user-list'
import AdminArticleList from './admin-article-list'

const AdminPage = () => {

  return (
    <div>
      <AdminUserList />
      <AdminArticleList />
    </div>
  )
}

export default AdminPage
