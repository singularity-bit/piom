import Card from "./components/Card/Card";
import Col from "./components/Layout/Col";
import Row from "./components/Layout/Row";
import useGetMovies from "./hooks/useGetMovies";
import { Loading } from "./components/Loading";

export default function App() {
  const [isLoading, movies] = useGetMovies();
  const movieList = movies.map((movie, index) => {
    return (
      <Col key={`${movie?.movie_title}_${index}`}>
        <Card
          header={movie?.movie_title}
          title={movie?.author}
          image={movie?.image_cover}
          content={movie?.content}
        />
      </Col>
    );
  });
  if(isLoading) return <Loading/>
  return (
    <div className="container">
      <Row className='row-cols-auto g-4 p-4'>{movieList}</Row>
    </div>
  );
}
