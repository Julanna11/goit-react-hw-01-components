import user from 'components/user/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friendList/friends.json';
import transactions from 'components/transactions/transactions.json';

import { Container } from './App.styled';
import { Section } from './App.styled';
import Profile from './user/Profile';
import Statistics from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Section>
        {/* React homework template */}
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
};
