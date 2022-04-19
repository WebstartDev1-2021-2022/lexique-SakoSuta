import { SearchProposition } from "./SearchProposition";

export const SearchPropositions = ({ propositions, goToResult }) => (
    <section className="slid Centrer colone">
        {propositions.map((proposition) => (
            <SearchProposition 
            proposition={proposition} 
            key={proposition.id} 
            goToResult={goToResult}/>
        ))}
    </section>
)