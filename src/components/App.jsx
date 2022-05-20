import Profile from "./Profile";
import user from '../data/user.json'
import data from '../data/data.json'
import Statistics from "./Statistics";
import friends from '../data/friends.json'
import FriendList from './FriendList';
import transactions from '../data/transactions.json';
import Transactions from "./Transactions";


export const App = () => {
  return (<div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile {...user} />
    <Statistics stats={data} title={'Upload stats'} />
    <FriendList friends={friends} />
    <Transactions transactions={transactions} />
    </div>
    
  );
};
