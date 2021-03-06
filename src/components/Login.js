import React from 'react';
import {Link} from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import {Container, Col, Card, CardBody, Form, Input, InputGroup, Row, Button} from 'reactstrap'; 


const Login = (props) => {
    useClass('bg-blue');
    const handleLogin = () => {
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
                                    <h2>Login</h2>
                                    <p>Não possui conta? <Link to="/register">Clique aqui para se Registrar</Link></p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="Insira o E-mail"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Insira a Senha"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button outline color="primary" onClick={handleLogin}>Logar</Button>
                                        <Link to="/forgot">
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

export default Login;
