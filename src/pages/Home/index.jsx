import { Header } from '../../components/Header';

import { Note } from '../../components/Note'

import { Container, Section, AddMovie } from './styles';

import { FiPlus} from 'react-icons/fi';

export function Home() {
    return(
        <Container>          
                <Header />
                    <Section>
                        <h2>Meus Filmes</h2>

                        <AddMovie to="/createM">
                            <FiPlus />
                            Adicionar filme
                        </AddMovie>

                    </Section>
                <main>
                    <Note data={{ 
                        title: 'Interestellar',
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos...',
                        tags: [
                            { id: '1', name: 'ficção cientifica' },
                            { id: '2', name: 'drama' },
                            { id: '3', name: 'suspense' }
                        ]
                    }} />

                    <Note data={{ 
                        title: 'Clube da Luta',
                        description: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.',
                        tags: [
                            { id: '1', name: 'drama'  },
                            { id: '2', name: 'suspense' },
                            { id: '3', name: 'comédia' }
                        ]
                    }} />

                    <Note data={{ 
                        title: 'Pulp Fiction',
                        description: 'Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.',
                        tags: [
                            { id: '1', name: 'drama'  },
                            { id: '2', name: 'suspense' },
                            { id: '3', name: 'acão' }
                        ]
                    }} />

                <Note data={{ 
                        title: 'Se7en - Seven - Os Sete Crimes Capitais',
                        description: 'A ponto de se aposentar, o detetive William Somerset pega um último caso, com a ajuda do recém-transferido David Mills. Juntos, descobrem uma série de assassinatos e logo percebem que estão lidando com um assassino que tem como alvo pessoas que ele acredita representar os sete pecados capitais.',
                        tags: [
                            { id: '1', name: 'supense'  },
                            { id: '2', name: 'drama' },
                            { id: '3', name: 'noir' }
                        ]
                    }} />

            </main>
        </Container>   
    )
}