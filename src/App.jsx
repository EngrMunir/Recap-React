import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import { CandidateProfile } from './components/CandidatePrpfile';
import Contact from './components/Contact';
import { ContactForm } from './components/ContactForm';
import Menu from './components/menu';
import { NewsLetter } from './components/NewsLetter';
import ProductList from './components/ProductList';
import UserDetails from './components/UserDetails';
import UserProfile from './components/UserProfile';
import { Welcome } from './components/Welcome';

const App = () => {
  return (
    <div>
      <Menu/>
      <Contact/>
      <NewsLetter/>
      <Alert>Your changes have been saved!</Alert>
      <ProductList/>
      <UserDetails name="Sirajul Munir" isOnline={true}/>
      <UserDetails name="Srejon Sharma" isOnline={false}/>
      <Welcome props="munir"/>
      <Welcome props="Sirajul"/>
      <Welcome props="Fauzia"/>
      <CandidateProfile/>
      <UserProfile/>
      <Button/>
      <ContactForm/>
    </div>
  );
};

export default App;