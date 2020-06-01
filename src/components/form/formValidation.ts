import { DegreeInfoObject, DateObject } from "../../shared/types"

export const validateForm = (school: string, studyInfo: DegreeInfoObject, dates: DateObject, bullets: string[]) => {
    if (school === '') {
        return true
    }
    if (studyInfo.degree === '' || studyInfo.fieldOfStudy === '' || studyInfo.GPA === '') {
        return true
    }
    if (bullets.length === 0) {
        return true
    }
    if (dates.monthStart === '' || dates.yearStart === '' || dates.monthEnd === '' || dates.yearEnd === '') {
        return true
    }
    return false
}
