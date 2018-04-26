const scenarios = ['js', 'ts']

const index = scenarios.indexOf(process.env.VUE_TEMPL_TYPE)
console.log('VUE_TEMPL_TYPE', process.env.VUE_TEMPL_TYPE)
const isTest = (exports.isTest = index !== -1)

const scenario = isTest && require(`./${scenarios[index]}.json`)

exports.addTestAnswers = (metalsmith, options, helpers) => {
  Object.assign(
    metalsmith.metadata(),
    { isNotTest: !isTest },
    isTest ? scenario : {}
  )
}
