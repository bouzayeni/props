
import './App.css';
import Components from './Profile/Components';

function App() {
  const StyleObject = {color:"red" , textAlign:"center"}
  const FullName='khalil bouzayeni'
  const Bio='from tunsia'
  const Profession='student'
  const PropsFunction =()=> {
    alert('welcome khalil')
  }
  return (
    <div Style={StyleObject}>
    <Components  Name={FullName}  Bt={Bio} Job={Profession} alertFct={PropsFunction}>
      <h1>image</h1>
    </Components>
    </div>
  );
}

export default App;
