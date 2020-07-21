<script>

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    import Node from './Node.svelte';
    export let network;

    function update() {
		dispatch('update');
    }

</script>

<div id="container">

    {#each network.nodes as node}
        <Node {node} on:update={update} />
    {/each}

</div>

<style>

    #container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-user-select: none;
        user-select: none;
    }

</style>
