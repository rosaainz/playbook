//Modelar Diagramas en --objetos--

//1. Repo
const repo = {
    name: "LaunchX",
    author: "carlogimar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return ('This repository '+this.name+ ' was created by ' +this.author)
        //return 'This repository ${this.name} was created by ${this.author}'

    }
}
console.log("Nombre del repo: " +repo.name)
console.log("Issues totales: " +repo.getTotalIssues())
console.log(repo.getGeneralInfo())



//////////////////////////



//2. Issue y PullRequest
const issue = {
    title: '05 Live 2 Semana 2 [Miercoles 13 de Abril]',
    repositoryNameAssociated:'LaunchX-InnovaccionVirtual',
    status: 'open',
    numberOfComments: 51,
    labels: 3,
    author: 'carlogilmar',
    dateCreated: '7 days ago',
    lastUpdated: '6 days ago',
    getTitleAndAuthor: function(){
        return this.title + this.author
    },
    getGeneralInfo: function(){
        return ('This issue ' +this.title+  ' was created on ' +this.dateCreated)
        //return 'This issue ${this.title} was created on ${this.dateCreated}'
    }
}
console.log('/// Ejercicio 1 /// Issue')
console.log("Titulo del issue: " +issue.title)
console.log("Información del issue: " +issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

// PullRequest 
const pullRequest = {
    title: 'adding my blog',
    branchName: 'main',
    dateCreated: '19 de Abril',
    status: 'verified',
    repositoryNameAssociated: 'visualpartnership' ,
    getStatus: function(){
        return this.status
    },
    getTitleAndAutor: function(){
        return this.title + this.repositoryNameAssociated
    }
}
console.log('/// Ejercicio 1 /// PullRequest')
console.log("Titulo del PR: " +pullRequest.title)
console.log("Status del PR: " +pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())


/////////////

//Twitter:

const twitter = {
    user: {
        user: 'rosa',
        username: 'rosaainz',
        followers: 303,
        dateCreated: 'julio 2011'
    },
    trending_topic: 'Web Development',
    hashtag: '#AlertaAmber'
}

//facebook:
const facebook = {
    user: {
        user: 'rosa sainz',
        post: '1200',
        biography:'Bailo y canto frente al espejo'
    }

}

//uber:
const uber = {
    profile: {
        user: 'rosa sainz',
        activity: 'user',
        calification: '5 estrellas'
    },
    travel: '30 viajes'

}
console.log('/// Ejercicio 1 /// Plataformas')
console.log("Twitter:")
console.log(twitter)
console.log("Facebook:")
console.log(facebook)
console.log("Uber:")
console.log(uber)

