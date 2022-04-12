import logSquid from '../../img/icon/Squid-logo.svg';
import '../../reset.css';
import { SearchInput } from './SearchInput';

export const Home = () =>
{
  return (
    <>
    <header>
      <p className="SquidSearch">SquidSearch</p>
    </header>
    <main>
      <section className="Centrer">
        <img src={ logSquid } alt="Squid-logo" className="logo"/>
        <p className="Recherche-Texte">Votre lexique du designer.</p>
        <SearchInput />
      </section>
      <section className="CentrerSearch">
        <button className="Langues">Français</button>
        <button className="Langues">Anglais</button>
      </section>
      <section>
        <button className="Categorie">UI-UX</button>
      </section>
    </main>
    </>
        );
}