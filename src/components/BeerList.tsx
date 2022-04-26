import React from "react";
import Beer from "./Beer";
import '../App.css';

const init = [
    {id: '0', name: 'Coreff'},
    {id: '1', name: 'Corona'},
    {id: '2', name: 'Mort Subite'},
];


const BeerList = () => {

    const [value, setValue] = React.useState('');
    const [beers, setList] = React.useState(init);
    const [counter, setCouter] = React.useState(init.length);

    /**
     * change value
     * @param event
     */

    function handleChange (event: { target: { value: React.SetStateAction<string>; }; }) {
        setValue(event.target.value);
    };

    /**
     * add a beer named value to the list
     * @param event
     */
    function handleSubmit(  event: { preventDefault: () => void; }) {

        if (value) {
            setList(beers.concat({id: counter.toString(), name: value}));
            setCouter(counter + 1)
        }
        setValue('');
        event.preventDefault();
    };

    /**
     * @param id of the beer to remove from the list
     */
    function handleClick(id: string) {
        setList(beers.filter(item => item.id !== id));
    };

   return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <button type="submit">Ajouter une bière</button>
            </form>
            <ul>
                {beers.map(item => (
                    <Beer handleClick={handleClick} item={item}/>
                ))}
            </ul>
        </div>

    );
};

export default BeerList;
