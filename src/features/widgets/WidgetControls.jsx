import { Button } from 'react-bootstrap';

import './widget.css';

const WidgetControls = ({
    close
}) => {

    return (
        <div className="widget-control">

            <Button
                variant="danger"
                onClick={close}
            >
                <i className="fa-solid fa-xmark" />
            </Button>
        </div>
    );
};

export default WidgetControls;