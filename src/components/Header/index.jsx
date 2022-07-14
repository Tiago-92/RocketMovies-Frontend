import { Input } from '../Input';
import { Container, Section, Profile } from './styles';

export function Header(){
    return(
        <Container>
            <h1>
                RocketMoveis
            </h1>

            <Section>
                <Input placeholder="Pesquisar por título" />
            </Section>
            
            <Profile to="/profile">
                <div className="flex">
                    <p>Tiago Amaral</p>
                    <span>sair</span>
                </div>    
            
                <img src=
                "https://github.com/Tiago-92.png" 
                alt="imagem do usuário"
                />
            </Profile>            
        </Container>
    )
}

