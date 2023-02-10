import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: "q1", author: "nikhil", text: "learning react is fun!" },
  { id: "q2", author: "rahul", text: "learning react is great!" },
];

const QuoteDetail = () => {
   const params = useParams()
   const match = useRouteMatch();

   const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    return (
        <>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path={match.path} exact>
        <Link to={`${match.url}/comments`}>Add comments</Link>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments/>
        </Route>
        </>
    )
}

export default QuoteDetail;