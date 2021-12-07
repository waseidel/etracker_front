import AuthContainer from './components/AuthContainer';
// import Login from './components/Login/index.jsx';
import Register from './components/Register';

const App = () => {
  return (
    <div>
      <AuthContainer >
        <Register />
      </AuthContainer>
    </div>
  );
}

export default App;
