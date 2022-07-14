import { Container, Form, Back } from "./styles";

import { Header } from "../../components/Header";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

import { ButtonB } from "../../components/ButtonB";

import { NoteItem } from "../../components/NoteItem";

import { Textarea } from "../../components/Textarea";

import { FiArrowLeft } from "react-icons/fi";

export function CreateMovie(){
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <Back to="/">
                        <FiArrowLeft />
                        Voltar
                    </Back>
                    <h1>
                        Novo Filme
                    </h1>
                    <section>
                        <Input type="text" placeholder="Título"/>
                        <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
                    </section>

                    <Textarea />

                    <h2>Marcadores</h2>

                    <div>
                        <NoteItem value="React" />
                        <NoteItem isNew value="Novo marcador"/>
                    </div>

                    <footer>
                        <ButtonB title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </footer>   
                </Form>
            </main>
        </Container>
    )
}