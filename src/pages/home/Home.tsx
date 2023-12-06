import ChartBox from "../../components/chartBox/ChartBox";
import {
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
    </div>
  );
};

export default Home;
