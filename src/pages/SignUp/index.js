import React, { useState } from 'react';
import { Platform } from 'react-native';
import {
    Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText
} from '../SignIn/styles';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled>
                {/* <Logo source={require('../../assets/Logo.png')} /> */}

                <AreaInput>
                    <Input
                        placeholder='Nome'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nome}
                        onChangeText={(text) => setEmail = (text)} />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='E-mail'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail = (text)} />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Senha'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={password}
                        onChangeText={(text) => setPassword = (text)} />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>



            </Container>
        </Background>
    );
}