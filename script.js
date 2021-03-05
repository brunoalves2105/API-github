window.addEventListener('load', function(){

let buscarPerfil = document.querySelector('#buscarPerfil')

let buscar = document.querySelector('#buscar')

let perfil = document.querySelector('#fotoBio')

let nomeDatas = document.querySelector('#nomeDatas')

buscar.addEventListener('click', function(){
    fetch('https://api.github.com/users/' + buscarPerfil.value).then(function(res){
        perfil.innerHTML = ''
        nomeDatas.innerHTML = ''
       return res.json()
    }).then(function(res){
         let dataInicio = new Date (res.created_at).toLocaleDateString()
        let dataAtualizacao = new Date (res.updated_at).toLocaleDateString()
        perfil.innerHTML += '<img src="' + res.avatar_url + '"><br><p>' +
        res.bio + '</p>'

        nomeDatas.innerHTML += '<h1>' + res.name +'</h1><p>Desde: ' + dataInicio + ' | Ultima atualização: ' + dataAtualizacao + '</p>'

    }).catch(function(){
        document.querySelector('.topo').innerHTML += '<p>Perfil <b>' + buscarPerfil.value + '</b> não encontrado</p>'
    })
})

})
