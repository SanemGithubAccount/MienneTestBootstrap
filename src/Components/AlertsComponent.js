import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertsComponent = () => {
    var arr = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    var variant, idx;
    return (
        <>
            {/* 1 */}
            <div>
                <h1>Alerts</h1>
                <h5>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</h5>
                <h1>Examples</h1>
                <h5>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight variants.</h5>
                {
                    arr.map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            This is a {variant} alert—check it out!
                        </Alert>
                    ))
                }
            </div>

            {/* 2 */}
            <div>
                <h1>Links</h1>
                <h5>For links, use the Alert.Link component to provide matching colored links within any alert.</h5>
                {
                    arr.map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            This is a {variant} alert with{' '}
                            <Alert.Link href="#">an example link</Alert.Link>. Give it a click if youlike.
                        </Alert>
                    ))
                }
            </div>

            {/* 3 */}
            <div>
                <h1>Additional content</h1>
                <h5>Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.</h5>
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                </Alert>
            </div>

            {/* 4 */}
            <div>
                <h1>Dismissing</h1>
                <h5>Add the dismissible prop to add a functioning dismiss button to the Alert.</h5>
                <AlertDismissibleExample />
            </div>

            {/* 5 */}
            <div>
                <h5>You can also control the visual state directly which is great if you want to build more complicated alerts.</h5>
                <AlertDismissible />
            </div>
        </>
    )
};

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

function AlertDismissible() {
    const [show, setShow] = useState(true);
    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">Close me y'all!</Button>
                </div>
            </Alert>
            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

export default AlertsComponent;