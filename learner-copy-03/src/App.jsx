import UserGreating from "./UserGreating.jsx";
function App() {
 

  return (
    <>
      <UserGreating isLoggedIn={true} username ='Galib'/>
      <UserGreating isLoggedIn={true}  />
    </>
  );
}

export default App;
