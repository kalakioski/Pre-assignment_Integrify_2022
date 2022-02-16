import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
`;

const Weather = styled.div`
  display: flex;
  padding: 16px 32px;
  border-radius: 4px;
  border: solid;
`;

const WeatherDay = ({ min, max, weatherType }) => {
  return (
    <div>
      <div>Type: {weatherType}</div>
      <div>
        Temp: {min} / {max}
      </div>
    </div>
  );
};

export const Card = () => {
  const locationKey = "202396";
  const apiKey = "QeQ3pkGMeTuSFmj1GfDKkqbr622p5mYC";

  const [weatherInfo, setWeatherInfo] = useState();

  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/202396?apikey=QeQ3pkGMeTuSFmj1GfDKkqbr622p5mYC&metric=true`
    )
      .then((res) => res.json())
      .then((res) =>
        setWeatherInfo(
          res.DailyForecasts.map((df) => {
            return {
              min: df.Temperature.Minimum.Value,
              max: df.Temperature.Maximum.Value,
              weatherType: df.Day.IconPhrase,
            };
          })
        )
      );
  }, []);

  return (
    <Container>
      <Weather>
        {!!weatherInfo &&
          weatherInfo.map((i, index) => (
            <WeatherDay min={i.min} max={i.max} weatherType={i.weatherType} />
          ))}
      </Weather>
    </Container>
  );
};
