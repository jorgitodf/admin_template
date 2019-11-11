import React from 'react';
import {Link} from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import {Container, Col, Card, CardBody, Form, Input, InputGroup, Row, Button} from 'reactstrap'; 


const Forgot = (props) => {
    useClass('bg-blue');
    const handleSendEmail = () => {
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
                                    <h2>Recuperar a Senha</h2>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="Insira o E-mail"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button outline color="primary" onClick={handleSendEmail}>Recuperar</Button>
                                        <Link to="/login">
                                            <Button outline color="primary">Login</Button>
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

export default Forgot;
