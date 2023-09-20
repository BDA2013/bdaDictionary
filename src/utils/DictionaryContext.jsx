import { createContext, useContext, useState, useEffect } from 'react';


// Create our theme context using createContext()
export const DictionaryContext = createContext();
const { Provider } = DictionaryContext;

// Create a custom hook that allows easy access to our NameContext values
export const useDictionary = () => useContext(DictionaryContext);

// Creating our theme provider. Accepts an argument of "props"
export default function DictionaryProvider(props) {
  const [state, setState] = useState([]);
  const [active, setActive] = useState([]);

useEffect(() => {
  async function getDictionaries() {
    const data = await fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/dictionaries');
    const json = await data.json();
    setState(json);
    setActive(json[0]);
    return;
  }
  getDictionaries();
}, []);

  return <Provider value={{ state, setState, active, setActive }} {...props} />;
}