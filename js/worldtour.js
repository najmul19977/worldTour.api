const loadData =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displyData(data.slice(0,3)))
   
    .catch ((error) =>{
        console.log(error);
    });
};
const displyData =(counties) =>{
     //console.log(counties);
    const container = document.getElementById('countries-info');
    container.innerHTML = " ";
    for(const countie of counties ){
        //console.log(countie.cca2);
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card w-full h-full bg-base-100 shadow-2xl">
  <figure class="px-10 pt-10">
    <img src="${countie.flags.png}" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${countie.name.common}</h2>
    <p>Population:${countie.population}</p>
    <p>Area:${countie.area}</p>
    <p>Capital:${countie.capital[0]}</p>
    <div class="card-actions">
      <button onclick ="showDetails('${countie.cca2}')" class="btn btn-primary">Details </button>
    </div>
  </div>
</div>
        `;
        container.appendChild(div);
    };
   
}
const showDetails =(id) =>{
    console.log(id);


}
loadData();
const showAlldata=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displyData(data))
    .catch ((error) =>{
        console.log(error);
    })

}