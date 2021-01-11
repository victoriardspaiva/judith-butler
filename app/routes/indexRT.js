var dados = [
    {"nome" : "Henning", "texto" : "Olá, bom dia aluno", "hora": "10:30"},
    {"nome" : "Elaine", "texto" : "Tranquilo professor 1", "hora": "10:12"},
    {"nome" : "Ladson", "texto" : "Tranquilo professor 2", "hora": "10:30"},
    {"nome" : "Herivelton", "texto" : "Tranquilo professor 3", "hora": "10:30"},
    {"nome" : "Alessandra", "texto" : "Tranquilo professor 4", "hora": "10:30"},
    {"nome" : "Marcos", "texto" : "Tranquilo professor 5", "hora": "10:30"},
    {"nome" : "Jones", "texto" : "Tranquilo professor 6", "hora": "10:30"},
    {"nome" : "Paulo", "texto" : "Tranquilo professor 7", "hora": "10:30"},
    {"nome" : "Bruna", "texto" : "Tranquilo professor 8", "hora": "10:30"},
    {"nome" : "Flavio", "texto" : "Tranquilo professor 9", "hora": "10:30"},
    {"nome" : "Gabriel", "texto" : "Tranquilo professor 10", "hora": "10:30"}
]

module.exports = function(site){
    site.get('/', function(req, res){
        res.render('index', {dados})
    })
    
    site.get('/aluno', function(req, res){
        res.end('Henning Summer')
    })
    
    site.get('/curso', function(req, res){
        res.end('Programador Web')
    })
}