import { Card, Row, Col } from 'react-bootstrap';
import CollectionControls from './CollectionControls';
import Widget from './Widget';

const Collection =  () => {

    return (
        <Card className="p-3" style={{ width: "32rem" }}>

            <Row className="g-3">
                
                <Col xs={12}>
                    <CollectionControls 
                        loading
                        refresh={() => console.log('refresh')}
                        settings={() => console.log('settings')}
                    />
                </Col>

                <Col xs={12}>
                    <Widget
                        title="The Yacht"
                        hint="60ft"
                        close={() => console.log('close')}
                        render={() => <h1 className="py-4">I'm on a boat!</h1>}
                    />
                </Col>

                <Col xs={12}>
                    <Widget
                        title="Spaghetti"
                        hint="Code"
                        close={() => console.log('close')}
                        render={() => <h3 className="py-4">Let's try write this one better</h3>}
                    />
                </Col>

            </Row>
        </Card>
    );
};

export default Collection;