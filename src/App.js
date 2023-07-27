import "./App.css";
import Footer from "./component/Footer";
import SearchPhotos from "./component/searchbar";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchPhotos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
