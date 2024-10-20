import PropTypes from 'prop-types';
function List(props){

    const catagory = props.catagory;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}:&nbsp;
         <b>{item.calories}</b></li>) 

    
// fruits.sort((a,b) => a.name.localeCompare(b.name));
// fruits.sort((a,b) => b.name.localeCompare(a.name));
// fruits.sort((a,b) => a.calories - b.calories);
// fruits.sort((a,b) => b.calories - a.calories);


  
    return(<>
            <h3 className="list-catagory">{catagory}</h3>
            <ol className="list-items">{listItems}</ol>
            </>);
}
List.prototype ={
    catagory: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
 ,
}
List.defaultProps={
    catagory: "Catagory",
    items: [],
 
}
export default List;