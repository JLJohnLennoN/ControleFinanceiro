import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {
    Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText
} from '../SignIn/styles';


export default function SignUp() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useContext(AuthContext);

    function handleSignUp() {
        signUp(email, password, nome);
    }

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
                        // autoCapitalize='none'
                        value={nome}
                        onChangeText={(text) => setNome(text)} />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='E-mail'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail(text)} />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Senha'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={password}
                        onChangeText={(text) => setPassword(text)} />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    );
}