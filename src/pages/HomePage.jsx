import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 900));
}

function HomePage(props) {
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);
    const dispatch = useDispatch();

    console.log(hobbyList, activeId);

    const handleAddHobbyClick = () => {
        // Random hobby object: id + title
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        // dispatch action
        const action = addNewHobby(newHobby)
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action);
    }

    return (
        <div className='home-page'>
            <h1>Redux hooks</h1>

            <button onClick={ handleAddHobbyClick }>Random hobby</button>

            <HobbyList
                hobbyList={ hobbyList }
                activeId={ activeId }
                onHobbyClick={ handleHobbyClick }
            />
        </div>
    );
};

export default HomePage;