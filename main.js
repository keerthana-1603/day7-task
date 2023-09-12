// A) Get all the countries from Asia continent /region using Filter function
let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){
    let data=JSON.parse(xhr.response);
    const result= data.filter((val)=>{
        if(val.region=="Asia")
        console.log(val.name);
    })
};

// B) Get all the countries with a population of less than 2 lakhs using Filter function
let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){
    let data=JSON.parse(xhr.response);
    const result= data.filter((val)=>{
        val.population<200000;
        console.log(val.name);
    })
};

// C) Print the following details name, capital, flag using forEach function
let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){
    let data=JSON.parse(xhr.response);
    const result= data.forEach((val)=>{
         console.log(`countries Name: ${val.name.common}
 Capital:${val.capital}
 Flag:${val.flag}`);
    })
};

// D) Print the total population of countries using reduce function
let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){
    let data=JSON.parse(xhr.response);
    const result= data.reduce((a,val)=>{
        return a+=val.population;
    },0)
    console.log(`Total population: ${result}`);
};

// E) Print the country which uses US Dollars as currency.
let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){
    let data=JSON.parse(xhr.response);
    console.log(data);
    const result= data.filter((val)=>{
        val.currencies[0]=="USD"
        console.log(val.name);
    })
 };


