import Categorys from "./Categorys/Categorys";
import LoginLinks from "./LoginLinks/LoginLinks";
import NewsContent from "./NewsContent/NewsContent";

const Home = () => {
    return (
        <div className="grid grid-cols-12 container mx-auto gap-3 mb-32">
           <Categorys></Categorys>
           <NewsContent></NewsContent>
           <LoginLinks></LoginLinks>
        </div>
    );
};

export default Home;