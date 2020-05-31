// Reducer

export interface IInitialState {
    userName: string
    searchResults: string[]
}

export interface IAction {
    type: string
    payload: any
}

export interface ISchool {
    web_page: string
    country: string
    domain: string
    name: string
}


//Form States

export interface DateObject {
    monthStart: string;
    yearStart: string;
    monthEnd: string;
    yearEnd: string;
  }

  export interface DegreeInfoObject {
    degree: string;
    fieldOfStudy: string;
    GPA: string;
  }