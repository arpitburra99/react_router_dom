import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import {
  Header,
  Home,
  About,
  Contact,
  Footer,
  User,
  Github,
} from './components';

const App = () => {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='about' element={<About />} />
    //     <Route path='contact' element={<Contact />} />
    //     <Route path='user/:userId' element={<User />} />
    //     <Route path='github' element={<Github />} />
    //   </Routes>
    //   <Footer />
    // </Router>
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
