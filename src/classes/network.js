function distance( position1, position2 ){
    let x = position1.x - position2.x;
    let y = position1.y - position2.y;
    return Math.sqrt( x*x + y*y );
}

export class Node {

    constructor( id, network ){

        this._id = id;
        this._network = network;

        this.createState();
        this.createPosition();

    }

    createState(){
        this._state = Math.random();
    }

    createPosition(){
        this._position = {
            x: Math.random(),
            y: Math.random(),
        };
    }

    findPeers(){
        let peers = [];
        for( let node of this._network._nodes ){
            if( node.id === this.id ){ continue; }
            peers.push({
                distance: distance( this.position, node.position ),
                node: node
            });
        }
        peers.sort((a,b) =>
            (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0)
        );
        peers = peers.slice(0,5);
        this._peers = peers.map(p => { return p.node; });
    }

    set state( s ){
        this._state = parseFloat( s );
        setTimeout(()=>{
            this.spread( this._state );
        }, 500);
    }

    get id(){
        return this._id;
    }
    get state(){
        return this._state;
    }
    get peers(){
        return this._peers;
    }
    get position(){
        return this._position;
    }

    spread( state ){
        for( let node of this.peers ){
            node.receive( state );
        }
        this._network.ping();
    }

    receive( state ){
        let delta = state - this._state;
        if( Math.abs( delta * 100 ) < 2 ){
            return;
        }
        this._state += (delta * 0.5);
    }

}

export class Network {

    constructor( length = 21 ){
        this._nodes = [];

        for (let i = 0; i < length; i++){
            this._nodes.push( new Node( i, this ) );
        }
        for (let node of this._nodes){
            node.findPeers();
        }

    }

    addNode(){
        let node = new Node( this );
        node.findPeers();
        this._nodes.push( node );
    }

    removeNode(){
        return this._nodes.pop();
    }

    ping(){
        console.log('Network Ping');
    }

    get state(){
        let average = 0;
        for (let node of this.nodes){
            average += node.state;
        }
        return average / this._nodes.length;
    }

    get nodes(){
        return this._nodes;
    }

}
