import logSearch from '../../img/icon/Icone-search.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => 
{
    const [word, setWord] = useState('')

    const navigate = useNavigate()

    const gotToResult = () => {
        navigate('/result', { state: { definition: 'item 1'}})
    }

    const onChage = (event) => 
    {setWord(event.target.value)}

    return ( 
    <from class="CentrerSearch">
        <input type="search" class="Barre-de-recherche"/>
        <button type="submit" class="Bouton-de-recherche" onClick={gotToResult}>
            <img src={ logSearch } alt="icon recherche" />
        </button>
    </from>
    );
};