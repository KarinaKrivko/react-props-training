// import React from 'react';
// import Greeting from '../Greeting/Greeting';

// const  App = () => {

//   const a = 10
//   const b = 20

//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <p>
//         {a} + {b} = {a+b}
//       </p>
//       <Greeting name="Tom" surname="Brown" age="30"/>
//       <Greeting name="Peter"  surname="Green"  age="28"/>
//       <Greeting name="Sven" surname="Grey" age="35" />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Total from '../Total/Total';
import Tel from '../Tel/Tel';



const App = () => {

  const course = "Frontend Pro"
  const part1 = "React Introduction"
  const task1 = 10
  const part2 = "React hooks usage"
  const task2 = 5
  const part3 = "React library  react-router-dom"
  const task3 = 15
  const footer = "Contacts"
  const tel = "Tel. +49 567888890000"

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total task1={task1} task2={task2} task3={task3} />
      <Footer contacts={footer}/>
      <Tel tel={tel}/>
    </div>
  );
};

export default App;




