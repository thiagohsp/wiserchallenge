import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimatedContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Digite um email')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }

        addToast({
          title: 'Erro na autenticação',
          type: 'error',
          description: ' Verifique suas credenciais!',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Olá, seja bem-vindo!</h1>
            <h3>Para acessar a plataforma, faça seu login.</h3>
            <Input
              icon={FiMail}
              name="email"
              placeholder="user.name@mail.com"
              label="E-mail"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              label="Senha"
              placeholder="**********"
            />
            <Button type="submit">ENTRAR</Button>

            <Link to="/forgot-password">
              Esqueceu seu login ou senha? <p>Clique aqui.</p>
            </Link>
          </Form>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
