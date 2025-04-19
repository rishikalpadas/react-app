import "./App.css";
import Card from "./components/Card.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <>
      <div className="heading bg-amber-300 h-30 flex flex-col items-center justify-center p-2 mb-3">
        <h1 className="bg-green-500 text-black p-4 rounded-2xl font-bold border-2 border-gray-600">
          Hello World!
        </h1>
      </div>
      <Counter />
      <div className="flex gap-4 flex-wrap justify-center">
        <Card
          avatar="https://images.pexels.com/photos/7704090/pexels-photo-7704090.jpeg?auto=compress&cs=tinysrgb&w=600"
          role="Software Developer"
          name="Rishikalpa Das"
          profile="Passionate software developer, coder, gamer, music enthusiast"
        />
        <Card
          avatar="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
          role=".NET Developer"
          name="Payal Adhikary"
          profile="Sweet, caring, and kind person, loves to learn new things"
        />
      </div>
    </>
  );
}

export default App;
