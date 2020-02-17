const users = [
    { name: 'Carlos', technologies: ['HTML', 'CSS'] },
    { name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
    { name: 'Tuane', technologies: ['HTML', 'Node.js'] }
]

for (let user of users) {
    console.log(`${user.name} work with ${user.technologies.join(", ")}`)
}

function checkIfUserUsesCSS(user) {
    for (let technology of user.technologies) {
        if (technology == "CSS") {
            return true
        }
    }
    return false
}

for (let user of users) {
    const userWorkWithCSS = checkIfUserUsesCSS(user)
  
    if(userWorkWithCSS) {
      console.log(`The user ${user.name} work with CSS`)
    }
  }