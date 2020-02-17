const name = 'Andrew'
const sex = 'M'
const age = 60
const contribution = 35

const manTime = 35
const manContributionTime = 95

const womanTime = 30
const womanContributionTime = 85

const retirement = age + contribution

if (sex == 'F' && contribution >= womanTime && retirement >= womanContributionTime) {
    console.log(`${name}, you can retire!`)
} else if (sex == 'M' && contribution >= manTime && retirement >= manContributionTime) {
    console.log(`${name}, you can retire!`)
} else {
    console.log(`${name}, you can't retire yet!`)
}