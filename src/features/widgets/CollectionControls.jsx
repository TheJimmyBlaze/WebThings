import { ButtonGroup, Button } from 'react-bootstrap';
import Fountain from '../progress/Fountain';

const CollectionControls = ({
    loading,
    refresh,
    settings
}) => {

    return (

        <div className="d-flex justify-content-end">

            <Fountain hidden={!loading}/>

            <ButtonGroup className="ms-2">
                <Button variant="secondary" onClick={refresh}>
                    <i className="fa-solid fa-rotate-right" />
                </Button>
                <Button variant="secondary" onClick={settings}>
                    <i className="fa fa-sliders" />
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default CollectionControls;