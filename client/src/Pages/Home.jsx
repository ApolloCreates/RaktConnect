import Introcard from "../Components/Introcard";

const Home = () => {
  return (
   <div className="bg-[#fef6f8]">
      <div className="main flex p-32 gap-32">
        <div className="image h-[50vh] w-[30vw] bg-red-500 p-4">
          <img src="src\assets\ravi23_may_5.jpg" alt="" />
        </div>
        <Introcard />
      </div>
      <div className="button">
      </div>
   </div>
  );
};

export default Home;
