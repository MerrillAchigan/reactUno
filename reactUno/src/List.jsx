

function List(){
    const fruits= [ {id: 1, name:'apple', calories:95},
                    {id: 2, name:'orange', calories:106}, 
                    {id: 3, name:'banana', calories: 90}, 
                    {id: 4, name:'coconut', calories: 159}];

    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse alphabetical (swith up a&b for the normal alphabetical order)
    //fruits.sort((a,b) => a.calories - b.calories);

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 )
    const highCalFruits = fruits.filter(fruit => fruit.calories > 100 )
    
    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                    {highCalFruit.name}: &nbsp;
                                                    {highCalFruit.calories}
                                                    </li>)

    return (<ul>{listItems}</ul>);
}

export default List