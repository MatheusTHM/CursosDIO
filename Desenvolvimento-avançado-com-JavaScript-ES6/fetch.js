fetch('/data.json', 
// {
//     method: 'post',
//     body: JSON.stringify
// }
)
.then(responseStream => responseStream.json())
.then(DataCue => {
    console.log(data);
})
.catch(err => {
    console.log('Erro: ', err);
})