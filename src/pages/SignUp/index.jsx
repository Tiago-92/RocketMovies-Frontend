import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Contaneir, Form, Background } from './styles';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

export function SignUp() {
    return(
        <Contaneir>
            <Form>    
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>
                <h2>Crie sua Conta</h2>

                <Input 
                    type="text"
                    icon={FiUser}
                    placeholder="Nome" 
                />

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

                <Button title="Cadastrar" />

                <button className="back">
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para o login
                    </Link>   
                </button>         
            </Form>
        <Background />
    </Contaneir>
            
    )
}