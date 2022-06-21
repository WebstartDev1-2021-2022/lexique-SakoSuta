import { useEffect } from "react"

export const useDirectus =() => 
{
    const [word, setWord] = useState([])
    const [isLoading, setIsLoading] = useState([false])
    const [error, setError] = useState([null])

    useEffect(() => {}, [word])

    const getPropositions = async (word) => {
        if (!word.trim()) return;

        try {
          const response = await fetch(`https://6jn58ouz.directus.app/items/Definition?fields=name,id&filter[name][_starts_with]=${word}`);
          const { data } = await response.json();
          //console.log(data);
          setPropositions(data);
        } catch (error) {
          console.error("SearchInput > getDefinition > error >", error);
        }
      };
      getPropositions();
    }, [word]);