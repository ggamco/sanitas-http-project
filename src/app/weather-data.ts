export interface WeatherData {
    coord?: CoordData;
    weather?: WeatherDto[];
    base?: string;
    dt?: number;
    visibility?: number;
}

interface CoordData {
    lon?: number;
    lat?: number;
}

interface WeatherDto {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
}

export class Weather {
    base?: string;
    visibility?: number;
    dt?: number;
    main?: string;
    description?: string;
    
    constructor() {}
    
    static fromData(weatherDataFromServer: WeatherData) {
        
        const mappedObject = new Weather()
        mappedObject.base = weatherDataFromServer.base;
        mappedObject.visibility = weatherDataFromServer.visibility;
        mappedObject.dt = weatherDataFromServer.dt;
        if(weatherDataFromServer.weather) {
            mappedObject.main = weatherDataFromServer.weather[0].main;
        }
        
        return mappedObject;
    }

}