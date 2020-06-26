import React, { useContext, useState } from 'react';
import { Background, Container, Nome, Saldo, Title, List } from './styles';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';

import HistoricoList from '../../components/HistoricoList';


export default function Home() {
    const { user } = useContext(AuthContext);

    const [historico, setHistorico] = useState([
        { key: '1', tipo: 'receita', valor: 9000.000 },
        { key: '2', tipo: 'receita', valor: 2500.000 },
        { key: '3', tipo: 'despesa', valor: 12000 },
        { key: '4', tipo: 'receita', valor: 200.000 },
    ]);

    return (
        <Background>
            <Header />
            <Container>
                <Nome>John</Nome>
                <Saldo>R$ 100.000.000,00</Saldo>
            </Container>
            <Title>Ultimas movimentações</Title>

            <List
                showVerticalScrollIndicator={false}
                data={historico}
                KeyExtrator={item => item.key}
                renderItem={({ item }) => (<HistoricoList />)} />
        </Background>
    );
}