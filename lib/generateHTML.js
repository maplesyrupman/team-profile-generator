
const managerHtml = manager => {
    return `
<div class="card employee">
    <div class='card-header bg-primary'>
        <h2 class='fs-4 text-white'>${manager.getName()}</h2>
        <h3 class='fs-5 text-white'><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href='${email}' class='card-link'>${manager.getEmail()}</a></li>
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
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href='${email}' class='card-link'>${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href='${makeGithub(engineer.getGithub())}' class='card-link'>${employee.getGithub()}</a></li>
        </ul>                
    </div>
</div>
`
}


const internHtml = intern => {
    return `
<div class="card employee">
    <div class='card-header bg-primary'>
        <h2 class='fs-4 text-white'>${employee.getName()}</h2>
        <h3 class='fs-5 text-white'><i class="fas fa-user-graduate"></i>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href='${email}' class='card-link'>${employee.getEmail()}</a></li>
            <li class="list-group-item">School: ${employee.getSchool()}</li>
        </ul>                
    </div>
</div>
`
}


