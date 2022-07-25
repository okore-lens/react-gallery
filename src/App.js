import imagelist from "./assets/images";
import "./App.scss";

function App() {
  const randomLength = () => {
    let y = Math.floor(Math.random() * 4 + 1);
    // console.log(y);
    return y;
  };
  const randomWidth = () => {
    let x = Math.floor(Math.random() * 4 + 1);
    // console.log(x);
    return x;
  };

  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <div className="App">
      <h2>Image Gallery</h2>
      <div className="container">
        {imagelist.map((image) => (
          <div
            key={image.id}
            className={`gallery-container w-${randomWidth()} h-${randomLength()}`}
          >
            <div className="gallery-item">
              <div onClick={clickHandler} className="image">
                <img src={image.src} alt={image.text} />
              </div>
              <div className="text">{image.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
