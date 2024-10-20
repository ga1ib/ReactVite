import List from './List.jsx';
function App(){
  const fruits = [{id: 1, name:'apple', calories: 95},
    {id: 2, name:'banana', calories: 934},
    {id: 3, name:'orange', calories: 92},
    {id: 4, name:'pineaple', calories: 132},
    {id: 5, name:'guava', calories: 13},
    {id: 6, name:'coconut', calories: 345}];

    const vegetables = [{id: 1, name:'potato', calories: 95},
      {id: 2, name:'carrot', calories: 934},
      {id: 3, name:'corn', calories: 92},
      {id: 4, name:'broccoli', calories: 132},
      {id: 5, name:'cucumber', calories: 13},
      {id: 6, name:'ginger', calories: 345}];


return(<>
        {fruits.length>0 && <List items ={fruits} catagory ="Fruits"/>}
        {vegetables.length>0 && <List items ={vegetables} catagory ="Vegetables"/>}
      </>);

}
export default App;