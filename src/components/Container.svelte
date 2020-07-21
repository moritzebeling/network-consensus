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
        width: 0;
        height: 0;
        -webkit-user-select: none;
        user-select: none;
    }

</style>
