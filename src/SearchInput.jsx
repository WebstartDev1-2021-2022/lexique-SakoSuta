import logSearch from './img/icon/Icone-search.svg';
export const SearchInput = () => 
{
    return ( 
    <from class="CentrerSearch">
        <input type="search" class="Barre-de-recherche"/>
        <button type="submit" class="Bouton-de-recherche">
            <img src={ logSearch } alt="icon recherche" />
        </button>
    </from>
    );
};