import styled from "styled-components";
import { icons } from "../../../assets/icons";
import moment from "moment";
//redux
import { RootState } from "../../../store/config/rootReducer";
import { useSelector } from "react-redux";

// style
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -1rem;
`;
const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgba(25, 118, 210, 0.08);
  color: #1976d2;
  padding: 0.5rem;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  border-bottom: 2px solid rgb(255, 204, 160);
`;
const FirstSection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: rgba(255, 204, 160, 0.2);
  padding: 1rem;
`;
const SecondSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 204, 160, 0.2);
  padding: 1rem;
`;
const Tem = styled.div`
  font-size: 60px;
`;
const TemSign = styled.div`
  align-self: start;
  font-size: 30px;
  margin-top: 11px;
`;
const H1 = styled.h2`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 204, 160, 0.2);
  margin: initial;
`;
const Text = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  background-color: rgba(255, 204, 160, 0.2);
`;
const DailyWeather = () => {
  const { locationDailyWeather, userLocation } = useSelector(
    (state: RootState) => state.dashboard
  );

  const formattedDate = moment(
    locationDailyWeather.DailyForecasts[0].Date
  ).format("MMMM Do YYYY, h:mm a");
  const tem = Math.trunc(
    (locationDailyWeather.DailyForecasts[0].Temperature.Maximum.Value +
      locationDailyWeather.DailyForecasts[0].Temperature.Minimum.Value) /
      2
  );

  return (
    <div>
      {userLocation.Key ? (
        <MainContainer>
          <Title>
            <div>Current Weather</div>
            <div>{`${userLocation.LocalizedName} ${userLocation.Country.LocalizedName}`}</div>
            <div> {formattedDate}</div>
          </Title>
          <Container>
            <H1>Day</H1>
            <FirstSection>
              <div>
                {icons.map((item, index) => {
                  if (
                    item.iconNumber ===
                    locationDailyWeather.DailyForecasts[0].Day.Icon
                  ) {
                    return (
                      <img
                        key={index}
                        src={require(`../../../assets${item.icon}`)}
                        alt="Logo"
                      />
                    );
                  }
                })}
              </div>
              <Tem>{tem + 1}°</Tem>
              <TemSign>C</TemSign>
            </FirstSection>
            <SecondSection>
              <div>{locationDailyWeather.DailyForecasts[0].Day.IconPhrase}</div>
              <div>
                {
                  locationDailyWeather.DailyForecasts[0].Day
                    .PrecipitationIntensity
                }
              </div>
              <div>
                {locationDailyWeather.DailyForecasts[0].Day.PrecipitationType}
              </div>
            </SecondSection>
          </Container>
          <Container>
            <H1>Night</H1>
            <FirstSection>
              <div>
                {icons.map((item, index) => {
                  if (
                    item.iconNumber ===
                    locationDailyWeather.DailyForecasts[0].Night.Icon
                  ) {
                    return (
                      <img
                        key={index}
                        src={require(`../../../assets${item.icon}`)}
                        alt="Logo"
                      />
                    );
                  }
                })}
              </div>
              <Tem>{tem - 2}°</Tem>
              <TemSign>C</TemSign>
            </FirstSection>
            <SecondSection>
              <div>
                {locationDailyWeather.DailyForecasts[0].Night.IconPhrase}
              </div>
              <div>
                {
                  locationDailyWeather.DailyForecasts[0].Night
                    .PrecipitationIntensity
                }
              </div>
              <div>
                {locationDailyWeather.DailyForecasts[0].Night.PrecipitationType}
              </div>
            </SecondSection>
          </Container>
          <Container>
            <Text>{locationDailyWeather.Headline.Text}</Text>
          </Container>
        </MainContainer>
      ) : (
        <h1>Search for your location</h1>
      )}
    </div>
  );
};

export default DailyWeather;

// <img
//   key={index}
//   src={require(`../../../assets${item.icon}`)}
//   alt="Logo"
// />