export const SearchProposition = ({ proposition, goToResult }) => (
   <button className="definition" onClick={() => goToResult(proposition.id)}>{proposition.name}</button>
)