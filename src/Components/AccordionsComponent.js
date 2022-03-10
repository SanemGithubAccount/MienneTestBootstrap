import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
const AccordionContext = React.createContext(null);
export { AccordionContext };

const AccordionsComponent = () => {
    return (
        <>
            {/* 1 */}
            <div>
                <h1>Accordion</h1>
                <h5>Build vertically collapsing accordions in combination with the Collapse component.</h5>
                <h1>Examples</h1>
                <h5>Click the accordions below to expand/collapse the accordion content.</h5>
                <h1>Basic Example</h1>
                <h5>Click the accordions below to expand/collapse the accordion content.</h5>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* 2 */}
            <div>
                <h1>Fully Collapsed State</h1>
                <h5>If you want your Accordion to start in a fully-collapsed state, then simply don't pass in a defaultActiveKey prop to Accordion.</h5>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* 3 */}
            <div>
                <h1>Flush</h1>
                <h5>Add flush to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</h5>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* 4 */}
            <div>
                <h1>Always open</h1>
                <h5>You can make accordion items stay open when another item is opened by using the alwaysOpen prop. If you're looking to control the component, you must use an array of strings for activeKey or defaultActiveKey.</h5>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* 5 */}
            <div>
                <h1>Custom Accordions</h1>
                <h5>You can still create card-based accordions like those in Bootstrap 4. You can hook into the Accordion toggle functionality via useAccordionButton to make custom toggle components.</h5>
                <h2>Custom Toggle</h2>
                <Example />
                {/* <h2>Custom Toggle with Expansion Awareness</h2>
                <h5>You may wish to have different styles for the toggle if it's associated section is expanded, this can be achieved with a custom toggle that is context aware and also takes advantage of the useAccordionButton hook.</h5>
                <Example2 /> */}
            </div>
        </>
    )
};

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'),);
    return (<button type="button" style={{ backgroundColor: 'pink' }} onClick={decoratedOnClick}>{children}</button>);
}

function Example() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="0">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

// function ContextAwareToggle({ children, eventKey, callback }) {
//     const { activeEventKey } = useContext(AccordionContext);
//     const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey),);
//     const isCurrentEventKey = activeEventKey === eventKey;
//     return (
//         <button type="button" style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
//             onClick={decoratedOnClick}>{children}</button>
//     );
// }

// function Example2() {
//     return (
//         <Accordion defaultActiveKey="0">
//             <Card>
//                 <Card.Header>
//                     <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="0">
//                     <Card.Body>Hello! I'm the body</Card.Body>
//                 </Accordion.Collapse>
//             </Card>
//             <Card>
//                 <Card.Header>
//                     <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="1">
//                     <Card.Body>Hello! I'm another body</Card.Body>
//                 </Accordion.Collapse>
//             </Card>
//         </Accordion>
//     );
// }

export default AccordionsComponent;