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
