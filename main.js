const button = ()=>{
        axios
            .get('https://swapi.dev/api/planets/2')
            .then((response) => {
                let residents = response.data.residents
                console.log(residents)
                for(i = 0; i < residents.length; ++i){
                    axios.get(residents[i])
                    .then((response) => {
                        console.log(response.data.name)
                        let names = response.data.name
                        let style = document.createElement('H2')
                        style.innerHTML = names
                        document.body.appendChild(style)
                    })
                }
            })
    }
    







document.querySelector('#residents')
residents.addEventListener('click',button )