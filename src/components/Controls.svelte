<script>
    import Button from './Button.svelte';
</script>

<div id="controls">
    <Button>Add Node</Button>
    <Button>Remove Node</Button>
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
