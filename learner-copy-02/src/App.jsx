import Student from "./Student.jsx";
function App() {
 

  return (
    <>
   <Student name ="Galib" age={20} isStudent={true}/>
   <Student name ="Sujana" age={22} isStudent={false}/>
   <Student name ="Hablu" age={19} isStudent={true}/>
   <Student name ="Mehbub" age={21} isStudent={false}/>
   <Student />
    </>
  );
}

export default App;
