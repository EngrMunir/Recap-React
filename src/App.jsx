import './App.css';
import Button from './components/Button';
import { CandidateProfile } from './components/CandidatePrpfile';
import { ContactForm } from './components/ContactForm';
import UserDetails from './components/UserDetails';
import UserProfile from './components/UserProfile';
import { Welcome } from './components/Welcome';

const App = () => {
  return (
    <div>
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