import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
    </>
  );
};

export default QuoteDetails;
