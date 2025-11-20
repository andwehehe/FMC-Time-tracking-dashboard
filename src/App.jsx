
import { useState } from 'react';
import Profile from './components/Profile/Profile'
import Category from './components/Categories/Category';

function App() {

  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  return(
    <>
      <section className='main-container'>
        <Profile 
          selectedTimeframe={selectedTimeframe} 
          setSelectedTimeframe={setSelectedTimeframe}/>
          
        <Category selectedTimeframe={selectedTimeframe}/>
      </section>
    </>
  );
}

export default App