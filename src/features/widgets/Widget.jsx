import { Card } from 'react-bootstrap';
import WidgetHeader from './WidgetHeader';

import './widget.css';

const Widget = ({
    title,
    hint,
    loading,
    close,
    render
}) => {

    return (
        <Card className="widget">
            
            <WidgetHeader
                title={title}
                hint={hint}
                close={close}
            />

            <div className="widget-body">
                {render()}
            </div>
        </Card>
    );
};

export default Widget;