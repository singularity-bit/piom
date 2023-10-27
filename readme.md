# Piom lab
Topics

### [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
### [Mock data](https://www.mockaroo.com/)

- ## App structure
  - ### Index & app.jsx
  - ### Package
  - ### Components
  - ### Custom Hooks
- ## Installing bootstrap
  - ### index.js ->  import "bootstrap/dist/css/bootstrap.css";
- ## Creating components
  - ### Button
    - Props (title,className, onClick)
  - ### Fragments
  - ### Card
    - Props ( header, image, title, content)
    - State ( is active)
    - Event handling ( handle button click,set state active)
    - Dynamic className
    - Custom component styling (card.css)
      - text ellipsis
  - ### Layout ( render children )
    - Row
      -Props (children,className)
    - Col
      -Props (children,className)
  - ### Loading
  - ### Main component
    - State ( list of movies)
    - Render list of cards
      - Keys
    - Render components dynamically
  - ### useGetMovies
    - State (isLoading,movies)
    - useEffect ( set movies when component mounts)

