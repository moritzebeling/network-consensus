<script>

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let node;

    let x = (window.innerWidth * 0.05) + ( node.position.x * window.innerWidth * 0.7);
    let y = (window.innerHeight * 0.05) + ( node.position.y * window.innerHeight * 0.7);

    let positive = Math.round(node.state) === 1;

    function updateState() {
        if( positive === true ){
            positive = false;
            node.state = 0;
        } else {
            positive = true;
            node.state = 1;
        }
		dispatch('update');
    }

</script>

<div class="node" style="top:{y}px; left:{x}px;" class:positive>
    <input type="checkbox" id="checkbox" bind:checked={positive} on:click={updateState}>
    <span>{Math.round(node.state * 100)} %</span>
</div>

<style>

    .node {
        position: absolute;
        z-index: 5;
        background-color: #000;
        color: #fff;
        padding: 0.3rem;
        border-radius: 5px;
        min-width: 8em;
        line-break: none;
        user-select: none;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
        transition: background-color 1s ease, color 1s ease;
    }

    .node.positive {
        color: #000;
        background-color: #fff;
    }

    input {
        display: inline-block;
    }

    span {
        display: inline-block;
        cursor: grab;
    }

</style>
