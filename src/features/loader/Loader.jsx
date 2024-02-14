import './loader.css';

const Loader = ({
    hidden
}) => {

    if (hidden) return;

    return (
        <div className="loader-progress-bar" />
    );
};

export default Loader;