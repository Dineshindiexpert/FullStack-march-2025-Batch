// Rename this to something like Layout.js or MainLayout.js
import { Link, NavLink, Outlet } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { AccordionBody, Button, Offcanvas, Stack } from "react-bootstrap";
import { useState } from "react";

export const MainLayout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="container">
            <div className="bg-dark text-white my-1 p-5 text-center">
                <h1>The React routes practice</h1>
            </div>

            <div className="d-flex gap-2 ">
                <div className="col-4 bg-success text-white text-start align-items-center rounded-3">
                    <div className="d-grid gap-1 justify-content-center rounded-1 aling-items-center py-5">
                        <div className="p-2">
                            <NavLink className="text-decoration-none text-white" to={"/dashboard"}>Home</NavLink>
                        </div>
                        <div className="p-2">
                            <NavLink className="text-decoration-none text-white" to={"/About"}>about</NavLink>
                        </div>
                        <div className="p-2">
                            <NavLink className="text-decoration-none text-white" to={"/setting"}>setting</NavLink>
                        </div>
                        <div className="p-2">
                            <NavLink className="text-decoration-none text-white" to={"/help"}>help</NavLink>
                        </div>
                        <div className="p-2">
                            <NavLink className="text-decoration-none text-white" to={"/bootstrap"}>bootstrap</NavLink>
                        </div>
                        <div className="p-2">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>React task</Accordion.Header>
                                    <Accordion.Body>
                                        <NavLink className="text-decoration-none text-dark" to={"/components/todolist"}>todolist task</NavLink>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <NavLink className="text-decoration-none text-dark" to={"/components/profile"}>profile task</NavLink>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <NavLink className="text-decoration-none text-dark" to={"/components/task2"}>profle task2</NavLink>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <NavLink className="text-decoration-none text-dark" to={"/components/task3"}>task3</NavLink>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <NavLink className="text-decoration-none text-dark" to={"/components/counterbyreducre"}>counter by reducer</NavLink>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                        {/* off canvas example  */}
                        <div className="p-2">
                            <Button variant="primary" onClick={handleShow}>
                                try to off canvas
                            </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>REACT OFF CANVAS</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                         <NavLink className="text-decoration-none text-dark" to={"/bootstrap"}>bootstrap</NavLink>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-8 bg-secondary text-white text-center align-items-center rounded">
                    <Outlet />
                </div>
            </div>

            <div className="bg-danger text-white rounded my-1 p-5">
                <div>
                    <h1 className="fs-5 text-center">its is a footer section. !</h1>
                </div>
            </div>
        </div>
    );
};
