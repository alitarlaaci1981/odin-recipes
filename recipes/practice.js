
let creator_1={
    name:"Ajay",
    niche:"Web Developer",
    tech(followers,platform){
        console.log(`${this.name} is a ${this.niche} and he has ${followers} followers on ${platform}`);

    }
}

let creator_2={
    name:"Arnold",
    niche:"Android Developer"
}


creator_1.tech(1000,"Instagram")
creator_1.tech.call(creator_2,500000,"Instagram")