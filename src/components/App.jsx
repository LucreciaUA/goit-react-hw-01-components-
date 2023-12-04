import React from 'react';
import stats from './data.json'
import { Statistics } from './stats'
import { Profile } from './profile'
import user from './user.json'
import { Friends } from './friendlist';
import friend from './friends.json'
import { Table } from './transaction';
import items from './transactions.json'

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} />
      <Friends friend={friend} />
      <Table items={items} />
    </>
  )
}

