<script>

    import Node from './Node.svelte';
    export let model;

</script>

<div id="container">

    {#each model.nodes as node}
        <Node {node} />
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
