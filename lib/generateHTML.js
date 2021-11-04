const makeGithub = (username) => {
    return `https://github.com/${username}`
}

const generateManagerHtml = manager => {
    return `
<div class="card employee">
    <div class='card-header bg-primary'>
        <h2 class='fs-4 text-white'>${manager.getName()}</h2>
        <h3 class='fs-5 text-white'><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href='${manager.getEmail()}' class='card-link'>${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
        </ul>                
    </div>
</div>
`
}

const engineerHtml = engineer => {
    return `
<div class="card employee">
    <div class='card-header bg-primary'>
        <h2 class='fs-4 text-white'>${engineer.getName()}</h2>
        <h3 class='fs-5 text-white'><i class="fas fa-glasses"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href='${engineer.getEmail()}' class='card-link'>${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href='${makeGithub(engineer.getGithub())}' class='card-link'>${engineer.getGithub()}</a></li>
        </ul>                
    </div>
</div>
`
}


const internHtml = intern => {
    return `
<div class="card employee">
    <div class='card-header bg-primary'>
        <h2 class='fs-4 text-white'>${intern.getName()}</h2>
        <h3 class='fs-5 text-white'><i class="fas fa-user-graduate"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href='${intern.getEmail()}' class='card-link'>${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>                
    </div>
</div>
`
}

const generateEngineersHtml = engineers => {
    const engineersHtml = [];
    for (let i = 0; i < engineers.length; i++) {
        engineersHtml.push(engineerHtml(engineers[i]))
    }

    return engineersHtml.join()
}

const generateInternsHtml = interns => {
    const internsHtml = [];
    for (let i = 0; i < interns.length; i++) {
        internsHtml.push(internHtml(interns[i]))
    }

    return internsHtml.join()
}

const generateHtml = ({ manager, engineers, interns }) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel='stylesheet' href='./styles/reset.css' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel='stylesheet' href='./styles/styles.css' />
</head>
<body>
    <nav class="navbar navbar-light bg-danger">
        <div class="container-fluid d-flex justify-content-center align-items-center">
            <span class="navbar-brand my-5 h1 d-inline-block fs-1 text-white">My Team</span>
        </div>
    </nav>
    <main>
        <div class='container'>
            ${generateManagerHtml(manager)}
            ${generateEngineersHtml(engineers)}
            ${generateInternsHtml(interns)}
    

        </div>
    </main>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
`
}

module.exports = generateHtml 
