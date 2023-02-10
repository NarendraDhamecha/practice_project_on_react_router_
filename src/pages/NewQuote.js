import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory();

    const addQuote = (data) => {
        history.push('/quotes')
        console.log(data);
    }

  return (
    <QuoteForm onAddQuote={addQuote}/>
  )
};

export default NewQuote;
