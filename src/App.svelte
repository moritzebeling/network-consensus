<script>

	import Canvas from './components/Canvas.svelte';
	import Controls from './components/Controls.svelte';
	import Container from './components/Container.svelte';

	import { Network } from './classes/network.js';

	const model = new Network( 11 );
	console.log( model );

	let positive = Math.round( model.state ) === 1;
	if( positive === true ){
		document.body.classList.add('positive');
	} else {
		document.body.classList.remove('positive');
	}

</script>

<Canvas />

<Container {model} />

<!-- <Controls /> -->

<div class="state">
	{Math.round(model.state*100)} %
</div>

<style>
	.state {
        margin: 1rem;
    }
</style>
