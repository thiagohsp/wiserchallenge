import React, { useMemo } from 'react';
import { format, isToday } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-day-picker/lib/style.css';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
} from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const selectedDate = useMemo(() => {
    return new Date();
  }, []);

  const selectedWeekDayAsText = useMemo(() => {
    return format(selectedDate, 'PPPP', {
      locale: ptBR,
    });
  }, [selectedDate]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Dashboard</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            <span>{selectedWeekDayAsText}</span>
          </p>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
