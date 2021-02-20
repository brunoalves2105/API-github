window.addEventListener('load', function(){

let buscarPerfil = document.querySelector('#buscarPerfil')

let buscar = document.querySelector('#buscar')

let perfil = document.querySelector('#fotoBio')

let nomeDatas = document.querySelector('#nomeDatas')

buscar.addEventListener('click', function(){
    fetch('https://api.github.com/users/' + buscarPerfil.value).then(function(res){
       return res.json()
    }).then(function(res){
        let dataInicio = res.created_at
        let dataAtualizacao = res.updated_at
        let diaInicio = dataInicio.substring(8,10)
        let mesInicio = dataInicio.substring(5,7)
        let anoInicio = dataInicio.substring(0,4)
        let diaAtualizacao = dataAtualizacao.substring(8,10)
        let mesAtualizacao = dataAtualizacao.substring(5,7)
        let anoAtualizacao = dataAtualizacao.substring(0,4)
        perfil.innerHTML += '<img src="' + res.avatar_url + '"><br><p>' +
        res.bio + '</p>'

        nomeDatas.innerHTML += '<h1>' + res.name +'</h1><p>Desde: ' + diaInicio + '/' + mesInicio + '/' + anoInicio + ' | Ultima atualização: ' + diaAtualizacao + '/' + mesAtualizacao + '/' + anoAtualizacao + '</p>'
    })
})

})