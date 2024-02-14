import WidgetControls from './WidgetControls';

import './widget.css';

const WidgetHeader = ({
    title,
    hint,
    close
}) => {

    return (
        <div className="widget-header">
            <div className="ms-2">
                {title}
            </div>
            <div className="ms-4 text-muted">
                {hint}
            </div>
            <WidgetControls
                close={close}
            />
        </div>
    );
};

export default WidgetHeader;