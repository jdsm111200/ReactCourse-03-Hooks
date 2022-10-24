import { Loading } from "../components/Quotes/Loading";
import { Quote } from "../components/Quotes/Quote";
import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, loading, error } = useFetch(counter);
  const { quote, author } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <Loading />
      ) : (
        <Quote
          quote={quote}
          author={author}
          counter={counter}
          next={increment}
          prev={decrement}
        />
      )}
    </>
  );
};
