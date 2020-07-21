<button>
    <slot>Button</slot>
</button>

<style>

    button {
        padding: 0.3rem;
        margin: 0.3rem;
        background-color: #ccc;
        border-radius: 5px;
        transition: background-color 300ms ease, color 300ms ease;
    }
    button:hover {
        background-color: #ff0;
    }

</style>
