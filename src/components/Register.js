import React from 'react';
import {Link} from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import {Container, Col, Card, CardBody, Form, Input, InputGroup, Row, Button} from 'reactstrap'; 


const Register = (props) => {
    useClass('bg-blue');
    const handleRegister = () => {
        alert('Requisição Http');
    }
    return (
        <div className="mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <Form>
                                    <h2>Novo Cadastro</h2>
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Insira o seu Nome Completo"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="Insira o E-mail"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Insira a Senha"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button outline color="primary" onClick={handleRegister}>Registrar</Button>
                                        <Link to="forgot">
                                            <Button color="link">Esqueceu a Senha?</Button>
                                        </Link>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register;
