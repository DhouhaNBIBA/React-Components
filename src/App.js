import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilPicture from './component/profile/ProfilPhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';

function App() {
  return (
    <div className="App">
      <FullName/>
      <ProfilPicture/>
      <Address/>
    </div>
  );
}



export default App;