// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

// Let's keep it simple and only add the following methods to the Map:
// setItem(key: string, item: T) // should create a new key-value pair
 
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs

// const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
// The map should be usable like shown below:
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();

class MyMap<T> {
    private items: {[key: string]: T} = {};

    setItem(key: string, value: T): void{
        this.items[key] = value;
    }

    getItem(key: string): T{
        return this.items[key];
    }

    printMap(){
        for(let key in this.items){
            console.log(`Key: ${key}, value: ${this.items[key]}`)
        }
    }

    clear(){
        this.items = {};
    }
}

const numberMap = new MyMap<number>(); // means T = number
// numberMap.setItem("something", "Hello"); // not work, we expect a number for the value
numberMap.setItem("foo", 123);
numberMap.setItem("bar", 456);
console.log(numberMap.getItem("foo"));
numberMap.printMap();
numberMap.clear();

const stringMap = new MyMap<string>();
// stringMap.setItem("foo", 10); // not work, we expect a string for the value
stringMap.setItem("foo", "FOO"); // works