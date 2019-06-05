class HashTable{
    // default size is a prime number*;
    constructor(size=53){
        this.keyMap=new Array(size);
    }
    _hash(key){
        let total=0;
        let crazy_prime=31;
        for (let i=0; i< Math.min(key.length,100); i++) {
            let char=key[i];
            let value= Math.abs(char.charCodeAt(0)-96);
            total=(total+crazy_prime+value)% this.keyMap.length;
        }
    console.log(total +' index number');
    return total;
    }
    set(key,val){
        let holder= this._hash(key)
        if(!this.keyMap[holder]) this.keyMap[holder]=[[key, val]];
        else this.keyMap[holder].push([key, val]);
        console.log(this.keyMap[holder]);
        // console.log(this);
        return this;
    }
    get(key){

    }
}
let aroo=new HashTable();
aroo.set('red','#12333')
aroo.set('raed','aa3')
// aroo._hash('!arookwwwado');