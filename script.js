const campoCep = document. queryslector('#cep')
const campoRua = document. queryslector('#rua')
const campoBairro = document. queryslector('#bairro')

campoCep.AddEventlitener('blu', asinc () => {
    const cep = campoCep.value
    const resposta = await fetch('https://viacep.com.br/ws'/${cep}/json/')
    const endereco = await resposta.json()
    console.log('endereco: ', endereco)

    campoRua.value = endereco.logradouro
    campoBairro.value = endereco.campoBairro
    
})

Function cadastrar(){
    alert('cadastro realizado com suceesso!')
}