<script>

    export let node;

    let x = (window.innerWidth * 0.05) + ( node.position.x * window.innerWidth * 0.7);
    let y = (window.innerHeight * 0.05) + ( node.position.y * window.innerHeight * 0.7);

    let checked = Math.round(node.state) === 1;

    function hit(){
        if( checked === true ){
            checked = false;
            node.state = 0;
        } else {
            checked = true;
            node.state = 1;
        }

    }

</script>

<div class="node" style="top:{y}px; left:{x}px;" class:checked>
    <input type="checkbox" id="checkbox" bind:checked={checked} on:click={hit}>
    <span>{Math.round(node.state * 100)} %</span>
</div>

<style>

    .node {
        position: absolute;
        z-index: 5;
        background-color: #222;
        color: #fff;
        padding: 0.3rem;
        border-radius: 5px;
        min-width: 8em;
        line-break: none;
        user-select: none;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
        transition: background-color 1s ease;
    }

    .node.checked {
        background-color: #00f;
    }

    input {
        display: inline-block;
    }

    span {
        display: inline-block;
    }

</style>
