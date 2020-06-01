import { DegreeInfoObject, DateObject, IErrors } from "../../shared/types"

export const validateForm = (school: string, studyInfo: DegreeInfoObject, dates: DateObject, bullets: string[], errors: IErrors) => {
    const err = { ...errors }
    if (school === '') {
        errors.school = true
    } else {
        errors.school = false
    }
    if (studyInfo.degree === '' || studyInfo.fieldOfStudy === '' || studyInfo.GPA === '') {
        errors.studyInfo = true
    } else {
        errors.studyInfo = false
    }
    if (bullets.length === 0) {
        errors.bullets = true
    } else {
        errors.bullets = false
    }
    if (dates.monthStart === '' || dates.yearStart === '' || dates.monthEnd === '' || dates.yearEnd === '') {
        errors.dates = true
    } else {
        errors.dates = false
    }
    return err
}
