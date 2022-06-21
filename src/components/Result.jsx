
import retour from '../img/icon/retour.svg';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from "react"

export const Result = () => {
    const { state } = useLocation()
    const [definition, setDefinition] = useState(null)

    useEffect(() => {
        // fetch avec l'id pour récupérer l'ensemble de la définition
        const  getDefinition = async () => {
            try {
                const response = await fetch(
                    `https://6jn58ouz.directus.app/items/Definition/${state.definitionID}`)

                const {data} = await response.json()

                if(data.errors){
                    throw data.errors.message
                }

                // Vérifier ce qu'est data
                setDefinition(data)


            } catch(error){
                console.error("SearchInput > getDefinition > error > ", error)
            }
        }
        getDefinition()
        
    }, [])

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return(
        <>
            {definition ? (
                <button className="retour" onClick={ goToHome }>
                    <img src={ retour } alt="retour" />
                </button>
                
            ) : (
                <p>Chargement...</p>
            )}
        </>
    )
}