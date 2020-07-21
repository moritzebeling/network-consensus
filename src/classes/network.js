export class Node {

    constructor( network ){

        this._network = network;
        this._state = this.createState();
        this._position = this.createPosition();

    }

    createState(){
        return Math.random();
    }
    set state( s ){
        this._state = parseFloat( s );
    }
    get state(){
        return this._state;
    }

    createPosition(){
        return {
            x: Math.random(),
            y: Math.random(),
        };
    }
    get position(){
        return this._position;
    }

}

export class Network {

    constructor( length = 11 ){
        this._nodes = [];

        for (let i = 0; i < length; i++){
            this.addNode();
        }
    }

    addNode(){
        this._nodes.push( new Node( this ) );
    }

    removeNode(){
        return this._nodes.pop();
    }

    get state(){
        let average = 0;
        for( let i = this._nodes.length-1; i >= 0; i-- ){
            average += this._nodes[i].state;
        }
        return average / this._nodes.length;
    }

    get nodes(){
        return this._nodes;
    }

}
