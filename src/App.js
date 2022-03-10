import './App.css';
// react
import * as React from 'react';
import {useState} from 'react';
import {Routes, Route, Outlet, Link, NavLink, useNavigate, useParams, useSearchParams} from 'react-router-dom';
// bootstrap
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import AlertsComponent from './Components/AlertsComponent.js';
import AccordionsComponent from './Components/AccordionsComponent.js';
import BadgesComponent from './Components/BadgesComponent.js';

//App with Container
// function App() {
//   const [SelectedComponentName, setSelectedComponentName] = useState('');
//   const HandleChangeComponentName = (ComponentName) => { setSelectedComponentName(ComponentName); }
//   return (
//     <div className="App">
//       <Container>
//         <Row className="justify-content-md-left">
//           <Col xs lg="3"><ListGroupComponent onChange={HandleChangeComponentName} /></Col>
//           <Col xs lg="6"><SelectComponent KindOfComp={SelectedComponentName} />;</Col>
//         </Row>
//       </Container>
//     </div >
//   );
// }

// Container and router
function App() {
    const navigate = useNavigate();
    const [SelectedComponentName, setSelectedComponentName] = useState('');

    function HandleChangeComponentName(ComponentName) {
        setSelectedComponentName(ComponentName);
        navigate('/' + ComponentName);
    }

    return (
        <div className="App">
            <Container>
                <Row className="justify-content-md-left">
                    <Col xs lg="3">
                        <Routes>
                            <Route element={<ListGroupComponent onChange={HandleChangeComponentName}/>}>
                                <Route index element={<ListGroupComponent onChange={HandleChangeComponentName}/>}/>
                                <Route path="/" element={<ListGroupComponent onChange={HandleChangeComponentName}/>}/>}
                                <Route path="*" element={<NoMatch/>}/>
                            </Route>
                        </Routes>
                    </Col>
                    <Col xs lg="6">
                        <Routes>
                            <Route path="/" element={<NoComponent/>}/>
                            <Route path=":SelectedComponentName"
                                   element={<SelectComponent KindOfComp={SelectedComponentName}/>}/>
                            <Route path="*" element={<NoMatch/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

function NoMatch() {
    return (<p>There's nothing here: 404!</p>);
};

function ListGroupComponent({onChange}) {
    let ComponentNamesArr = ['Alerts', 'Accordion', 'Badge', 'None'];
    return (
        ComponentNamesArr.map((variant, idx) => (
            <ListGroup>
                <ListGroup.Item key={idx} variant={variant} action onClick={() => onChange(variant)}>
                    {variant}
                </ListGroup.Item>
            </ListGroup>
        )))
}

function SelectComponent(props) {
    switch (props.KindOfComp) {
        case 'Alerts':
            return <AlertsComponent/>
        case 'Accordion':
            return <AccordionsComponent/>
        case 'Badge':
            return <BadgesComponent/>
        default:
            return <NoComponent/>
    }
}

function NoComponent() {
    return <h2>No component is selected! </h2>
}

export default App;
