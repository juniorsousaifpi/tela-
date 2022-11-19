const campoCep = document. querySelector('#cep')
const campoRua = document. querySelector('#rua')
const campoBairro = document.querySelector('#bairro')

campoCep.addEventListener('blur', async () => {
    const cep = campoCep.value
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const endereco = await resposta.json()
    console.log('endereco: ', endereco)

    campoRua.value = endereco.logradouro
    campoBairro.value = endereco.bairro
    
})

function cadastrar(){
    alert('cadastro realizado com suceesso!')
}