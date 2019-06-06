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
    // console.log(total +' index number');
    return total;
    }
    set(key,val){
        let holder= this._hash(key)
        if(!this.keyMap[holder]) this.keyMap[holder]=[[key, val]];
        else this.keyMap[holder].push([key, val]);
        // console.log(this.keyMap[holder]);
        return this;
    }
    get(key){
        let holder= this._hash(key);
        if(!this.keyMap[holder]){console.log(undefined); return undefined;}
        for (let i = 0; i < this.keyMap[holder].length; i++) {
        // console.log(this.keyMap[holder][i]);
        // console.log(key+' this is the key')
            if(this.keyMap[holder][i][0]==key) {
                console.log(this.keyMap[holder][i][1]); 
                return this.keyMap[holder][i][1]
            }
        }
        return undefined;
    }
    keys(){
        let arr=[];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let x=0; x< this.keyMap[i].length; x++){
//pew pew, targets keys in the array within the array #inception; #thisisallanObjectWithinAnOBJECT
                    arr.push(this.keyMap[i][x][0])
                }
            }   
        }
        console.log(arr);
        return arr;
    }
    values(){
        let arr=[];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let x=0; x< this.keyMap[i].length; x++){
                    arr.push(this.keyMap[i][x][1])
                }
            }   
        }
        console.log(arr);
        return arr;
    }
}
let aroo=new HashTable();
aroo.set('red','#12333');
aroo.set('redaawwww','#993ww33');
aroo.set('redwwwr!!!we','aa3');
aroo.set('aroo3','SURPRISEbunnyATTACK');
// console.log(aroo.keyMap[14][0])
// aroo._hash('!arookwwwado');
// aroo.get('redwwwr!!!we');
aroo.get('aroo3');
aroo.keys();
aroo.values();