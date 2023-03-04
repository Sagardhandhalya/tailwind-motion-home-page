import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import ExpressYourSelf from "./components/Card/ExpressYourSelf";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const CraftTogether = () => {
  return (
    <img
      alt="some"
      src="https://firebasestorage.googleapis.com/v0/b/auth-app-b9ba2.appspot.com/o/image%20(2).svg?alt=media&token=232db497-b469-4c8b-b1dc-84c1989a264e"
    />
  );
};

const NeverLoseAttention = () => {
  return <div className="min-w-100" >
    <h1 className="text-gray-600 text-bold text-5xl font-medium mt-7">
     This year has been <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Massive</span> for us!
    </h1>
  </div>;
};

const cardsContent = [
  {
    title: "Craft together.",
    text: "Create, craft and share stories together with real time collaboration",
    component: <CraftTogether />,
  },
  {
    title: "Never lose attention.",
    text: "Engage your audience with fun reactions and interactive effects",
    component: <NeverLoseAttention />,
  },
  {
    title: "Express yourself.",
    text: "Make presentations human and fun again with reactions and emotes",
    component:<ExpressYourSelf/>
  },
];
function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <CustomCursor/>
      <div className="flex justify-center items-center mt-14">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-[3px]">
          <path
            d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
            fill="#A594FD"></path>
        </svg>
        <h1 className="text-purple-500 text-2xl ml-2 font-semibold">Team collaboration</h1>
      </div>
      <h1 className="text-6xl text-white font-bold mt-12">
        Rediscover the joy in storytelling.
      </h1>
      <div className="flex flex-wrap mt-12">
        {cardsContent.map((card) => (
          <Card
            title={card.title}
            text={card.text}
            component={card.component}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
