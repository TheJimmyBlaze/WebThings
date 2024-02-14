import DropSpace from './features/widgets/Collection';

const App = () => {

  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light overflow-hidden"
      data-bs-theme="dark" 
    >
      <DropSpace />
    </div>
  )
};

export default App;
