import React, { useContext, useState } from 'react';
import { Background, Container, Nome, Saldo, Title, List } from './styles';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';

import HistoricoList from '../../components/HistoricoList';


export default function Home() {
    const { user } = useContext(AuthContext);

    const [historico, setHistorico] = useState([
        { key: '1', tipo: 'receita', valor: 90000 },
        { key: '2', tipo: 'receita', valor: 250000 },
        { key: '3', tipo: 'despesa', valor: 1200 },
        { key: '4', tipo: 'receita', valor: 200000 },
        { key: '5', tipo: 'despesa', valor: 5000 },
        { key: '6', tipo: 'receita', valor: 15000 },
        { key: '7', tipo: 'despesa', valor: 100 },
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
                showsVerticalScrollIndicator={false}
                data={historico}
                KeyExtrator={item => item.key}
                renderItem={({ item }) => (<HistoricoList data={item}/>)} />
        </Background>
    );
}