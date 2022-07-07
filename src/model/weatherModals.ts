interface IdLocalizedName {
  ID: string;
  LocalizedName: string;
}

export interface UserLocation {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: IdLocalizedName;
  AdministrativeArea: IdLocalizedName;
}


export interface LocationDailyWeather {
  Headline: {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
  };
  DailyForecasts: [
    {
      Date: string;
      EpochDate: number;
      Temperature: {
        Minimum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Maximum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
      };
      Day: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: false;
      };
      Night: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: true;
        PrecipitationType: string;
        PrecipitationIntensity: string;
      };
      Sources: [string];
      MobileLink: string;
      Link: string;
    }
  ];
}