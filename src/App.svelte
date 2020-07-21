<script>

	import Canvas from './components/Canvas.svelte';
	import Controls from './components/Controls.svelte';
	import Container from './components/Container.svelte';

	import { Network } from './classes/network.js';

	const model = new Network( 11 );
	let net = model;
	console.log( net );

	let positive = Math.round( model.state ) === 1;
	if( positive === true ){
		document.body.classList.add('positive');
	} else {
		document.body.classList.remove('positive');
	}

	function update(event){
		console.log('update');
		net = model;

		positive = Math.round( net.state ) === 1;
		if( positive === true ){
			document.body.classList.add('positive');
		} else {
			document.body.classList.remove('positive');
		}
	}

</script>

<Canvas />

<Container network={net} on:update={update} />

<!-- <Controls /> -->

<div class="state">
	{Math.round(net.state*100)} %
</div>

<style>
	.state {
        margin: 1rem;
    }
</style>
