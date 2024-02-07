interface Step {
  title: string
  text: string
  expected: string
  errors: string[]
  validated: boolean = false
}