<script>
    import Button from './Button.svelte';

    function addNode(){
        console.log('addNode()');
    }
    function removeNode(){
        console.log('removeNode()');
    }
</script>

<div id="controls">
    <Button on:click={addNode}>Add Node</Button>
    <Button on:click={removeNode}>Remove Node</Button>
</div>

<style>

    #controls {
        position: fixed;
        right: 0;
        bottom: 0;
        padding: 0.5rem;
        z-index: 10;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

</style>
