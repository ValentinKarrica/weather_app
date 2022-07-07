import styled from "styled-components";
import { icons } from "../../../assets/icons";

//redux
import { RootState } from "../../../store/config/rootReducer";
import { useSelector } from "react-redux";
const DailyWeather = () => {
  const { locationDailyWeather } = useSelector(
    (state: RootState) => state.dashboard
  );
  console.log(icons);
  console.log(locationDailyWeather);
  return (
    <div>
      {icons.map((item, index) => {
        return (
          <img
            key={index}
            src={require(`../../../assets${item.icon}`)}
            alt="Logo"
          />
        );
      })}
    </div>
  );
};

export default DailyWeather;
