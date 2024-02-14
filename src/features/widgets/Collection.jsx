import { Card, Row, Col } from 'react-bootstrap';
import Controls from './Controls';

const Collection =  () => {

    return (
        <Card className="p-2" style={{ width: "32rem" }}>

            <Row className="g-2">
                
                <Col xs={12}>
                    <Controls 
                        loading
                        refresh={() => console.log('refresh')}
                        settings={() => console.log('settings')}
                    />
                </Col>

            </Row>
        </Card>
    );
};

export default Collection;