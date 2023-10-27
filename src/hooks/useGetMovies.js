import { useEffect, useState } from "react";
const Movies = [
  {
    movie_title: "Russia House, The",
    author: "Niels Roney",
    content: "ultrices vel augue vestibulum ante",
    image_cover: "http://dummyimage.com/113x100.png/5fa2dd/ffffff"
  },
  {
    movie_title: "Assassin of the Tsar",
    author: "Ivy Merring",
    content:
      "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
    image_cover: "http://dummyimage.com/223x100.png/cc0000/ffffff"
  },
  {
    movie_title: "Hit Squad",
    author: "Lorri Wheal",
    content: "duis aliquam convallis nunc proin at turpis a pede posuere",
    image_cover: "http://dummyimage.com/197x100.png/ff4444/ffffff"
  },
  {
    movie_title: "Are You Scared?",
    author: "Ileana Simoncini",
    content: "eu sapien cursus vestibulum proin eu",
    image_cover: "http://dummyimage.com/229x100.png/5fa2dd/ffffff"
  },
  {
    movie_title: "Riding Alone for Thousands of Miles (Qian li zou dan qi)",
    author: "Devonne Ohms",
    content:
      "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
    image_cover: "http://dummyimage.com/236x100.png/5fa2dd/ffffff"
  }
];
function useGetMovies() {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setMovies(Movies);
      setLoading(false);
    }, 1500);
  }, []);

  return [isLoading, movies];
}
export default useGetMovies;
