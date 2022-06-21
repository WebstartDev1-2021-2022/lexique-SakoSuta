import logSquid from '../../img/icon/Squid-logo.svg';
import { SearchInput } from './SearchInput';
import { Categorie } from "../Categorie"
import { SearchPropositions } from './SearchPropositions';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () =>
{
  const [propositions, setPropositions] = useState([])

  const navigate = useNavigate()

  const goToResult = (definitionID) => {
    navigate('/result', { state: {
      definitionID
    }})
  }

  return (
    <>
    <header>
      <p className="SquidSearch bold">SquidSearch</p>
    </header>
    <main>
      <section className="Centrer colone">
        <img src={ logSquid } alt="Squid-logo" className="logo"/>
        <p className="Recherche-Texte bold">Votre lexique du designer.</p>
        <SearchInput setPropositions={setPropositions} />
          <div className="test">
        <SearchPropositions propositions={propositions} goToResult={goToResult}/>
        </div>
      </section>
      <Categorie ClassNameS="Centrer" ClassNameD="Centrer colone cat"/>
    </main>
    </>
        );
}