import { FiMail, FiLock } from 'react-icons/fi';

import { Contaneir, Form, Background } from './styles';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';


export function SignIn() {
    return(
        <Contaneir>
            <Form>    
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                <h2>Faça seu Login</h2>

                <Input 
                    type="email"
                    icon={FiMail}
                    placeholder="E-mail" 
                />

                <Input 
                    type="password"
                    icon={FiLock}
                    placeholder="Senha"                 
                />
                    
                <Button title="Entrar" />

                <button className="createAccount">
                    <Link to="/register">
                        Criar Conta
                    </Link>
                </button>
                
            </Form>
        <Background />
    </Contaneir>
            
    )
}