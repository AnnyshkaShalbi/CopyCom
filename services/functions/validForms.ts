import {
  validName,
  validPhone,
  validEmail,
} from './validator'

interface Form {
  value: string,
  valid: boolean,
  error: boolean | string,
  placeholder: string,
  view: boolean,
  disable: boolean
}

export const formName = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validName(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Введите имя"
    form.valid = false
    return false
  }
}

export const formPhone = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  console.log('=form phone here=')
  let check = validPhone(form.value)
  if (check) {
    form.error = false
    form.valid = true
    console.log('=form.valid=',form.valid)
    return true
  } else {
    form.error = "Некорректный номер"
    form.valid = false
    console.log('=form.valid=',form.valid)
    return false
  }
}

export const formEmail = function (form: Form) {
  if (!form.value.length) {
    form.error = false
    form.valid = false
    return false
  }
  let check = validEmail(form.value)
  if (check) {
    form.error = false
    form.valid = true
    return true
  } else {
    form.error = "Некорректный email"
    form.valid = false
    return false
  }
}
