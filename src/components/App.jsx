import Profile from './profile/profile';
import user from '../components/profile/user'

import data from '../components/statistics/data';
import  Statistics from './statistics/statistics'

import FriendList from './friendList/friendList';
import friends from './friendList/friends'

import TransactionHistory from './transactionHistory/transactionHistory'
import transactions from './transactionHistory/transactions'


export const App = () => {
  return (
    <div
    >
      <Profile 
          avatar = {user.avatar}
          username = {user.username}
          location = {user.location}
          tag = {user.tag}
          followers = {user.stats.followers}
          views = {user.stats.views}
          likes = {user.stats.likes}
          />
      <Statistics
          title='Upload stats'
          items = {data}
          />
      <FriendList
          friends = {friends}
      />
      <TransactionHistory
      items = {transactions}
      />    
    </div>
  );
};
