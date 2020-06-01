// Redux

export interface IInitialState {
    userName: string
    searchResults: string[]
    educationList: EducationObject[]
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

//Education Object

export interface EducationObject {
    school: string
    studyInfo: DegreeInfoObject
    dates: DateObject
    bullets: string[]
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