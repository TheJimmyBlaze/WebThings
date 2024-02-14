import './fountain.css';

const Fountain = ({
    hidden
}) => {

    if (hidden) return;

    return (
        <div className="fountain-progress-bar" />
    );
};

export default Fountain;