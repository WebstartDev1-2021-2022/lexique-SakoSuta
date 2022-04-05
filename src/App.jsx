import logSquid from './img/icon/Squid logo.svg';
import './App.scss';
import './reset.css';
import { SearchInput } from './SearchInput';

function App ()
{
  return (
    <>
    <header>
      <p class="SquidSearch">SquidSearch</p>
    </header>
    <main>
      <section class="Centrer">
        <img src={ logSquid } alt="Squid-logo" class="logo"/>
        <p class="Recherche-Texte">Votre lexique du designer.</p>
        <SearchInput></SearchInput>
      </section>
      <section class="CentrerSearch">
        <button class="Langues">Français</button>
        <button class="Langues">Anglais</button>
      </section>
      <section>

      </section>
    </main>
    </>
        );
}

export default App;

const style = 
{
  h1: {backgroundColor: 'green', color: 'orange'},
  a: {backgroundColor: 'orange',
      },
}
