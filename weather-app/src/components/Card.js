import styled from "styled-components";
import { useEffect, useState } from "react";
import { LocationSearch } from "./SearchBar";

const WeatherContainer = styled.div`
  display: flex;
  height: 50vh;
  width: 100vh;
  justify-content: center;
  align-items: center;
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  padding: 16px 32px;
  border-radius: 10px;
  border: solid;
  height: 300px;
  width: 200px;
  background: #ffeccf;
  font-family: "Red Hat Display", sans-serif;
  font-size: 24px;
  outline: none;
`;

const Image = styled.img`
  margin-bottom: 40px;
  height: 75%;
`;

const WeatherDay = ({ min, max, weatherType, weatherKey }) => {
  return (
    <WeatherContainer>
      <WeatherBox>
        <div>
          <Image
            src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
          />
        </div>
        <div>{weatherType}</div>
        <div>
          {min} °C | {max} °C
        </div>
      </WeatherBox>
    </WeatherContainer>
  );
};

export const Card = () => {
  const apiKey = "QeQ3pkGMeTuSFmj1GfDKkqbr622p5mYC";

  const [locationKey, setLocationKey] = useState();
  const [weatherInfo, setWeatherInfo] = useState();

  const padNum = (num) => {
    const stringNum = num + "";
    const stringLength = stringNum.length;

    if (stringLength === 1) {
      return "0" + stringNum; // 4 -> 04
    } else {
      return stringNum; // 17 -> 17
    }
  };

  useEffect(() => {
    console.log(locationKey);
    if (locationKey) {
      fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&metric=true`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setWeatherInfo(
            res.DailyForecasts.map((df) => {
              return {
                min: df.Temperature.Minimum.Value,
                max: df.Temperature.Maximum.Value,
                weatherType: df.Day.IconPhrase,
                weatherKey: padNum(df.Day.Icon),
              };
            })
          );
        });
    }
  }, [locationKey]);

  return (
    <div>
      <div>
        <LocationSearch
          onKeyFound={(keyInfo) => {
            setLocationKey(keyInfo.key);
          }}
        />
      </div>
      {!!weatherInfo &&
        weatherInfo.map((i, index) => (
          <div key={index}>
            <WeatherDay
              min={i.min}
              max={i.max}
              weatherType={i.weatherType}
              weatherKey={i.weatherKey}
            />
          </div>
        ))}
    </div>
  );
};
