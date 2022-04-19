import logSearch from '../../img/icon/Icone-search.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const SearchInput = ({ setPropositions }) => 
{
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')
    const navigate = useNavigate()
    const goToResult = () => 
    {
        navigate('/result', { state: { definition: 'abcd' } })
    }

    useEffect(() => 
    {
        const  getDefinition = async () => 
        {
            if(!word) return

            try 
            {
                const response = await fetch(`https://6jn58ouz.directus.app/items/Definition?fields=name,id&filter[name][_starts_with]=${word}`)
                
                const {data} = await response.json()

                console.log(data)
                
                setPropositions(data)
            }
            catch(error)
            {
                console.error('SearchInput > getDefinition > error >', error)
            }
        }
        getDefinition()
    }, [word])

    return ( 
    <from className="CentrerSearch">
        <input type="search" value={word} className="Barre-de-recherche" onChange={(event) => {setWord(event.target.value)}}/>
        <button type="submit" className="Bouton-de-recherche" onClick={ goToResult }>
            <img src={ logSearch } alt="icon recherche" />
        </button>
    </from>
    );
};