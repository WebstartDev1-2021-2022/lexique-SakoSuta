import logSquid from '../../img/icon/Squid-logo.svg';
import '../../reset.css';
import { SearchInput } from './SearchInput';
import { Categorie } from "../../components/Categorie"

export const Home = () =>
{
  return (
    <>
    <header>
      <p className="SquidSearch bold">SquidSearch</p>
    </header>
    <main>
      <section className="Centrer colone">
        <img src={ logSquid } alt="Squid-logo" className="logo"/>
        <p className="Recherche-Texte bold">Votre lexique du designer.</p>
        <SearchInput />
      </section>
      <section className="CentrerSearch">
        <button className="Langues bold">Français</button>
        <button className="Langues bold">Anglais</button>
      </section>
      <Categorie ClassNameS="Centrer" />
    </main>
    </>
        );
}