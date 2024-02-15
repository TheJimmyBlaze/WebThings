import { Card, Row, Col } from 'react-bootstrap';
import CollectionControls from './CollectionControls';
import Widget from './Widget';
import { useNewDocuments } from './implementations/useNewDocuments';

const Collection =  () => {

    const widgets = [
        useNewDocuments()
    ];

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

                {
                    widgets.map(({title, hint, loading, render}) => (
                        <Widget
                            title={title}
                            hint={hint}
                            loading={loading}
                            close={() => console.log(close)}
                            render={render}
                        />
                    ))
                }

            </Row>
        </Card>
    );
};

export default Collection;