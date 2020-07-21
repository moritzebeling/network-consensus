<script>

	import Canvas from './components/Canvas.svelte';
	import Controls from './components/Controls.svelte';
	import Container from './components/Container.svelte';

	import { Network } from './classes/network.js';

	const model = new Network( 50 );
	let net = model;

	let positive = Math.round( model.state ) === 1;
	let g = net.state * 255;
	document.body.style.backgroundColor = `rgba(${g},${g},${g})`;

	function update(event){
		console.log('update');
		net = model;
		positive = Math.round( model.state ) === 1;
		g = net.state * 255;
		document.body.style.backgroundColor = `rgba(${g},${g},${g})`;
	}

</script>

<Canvas />

<Container network={net} on:update={update} />

<!-- <Controls /> -->

<div class="state">
	<input disabled type="checkbox" id="checkbox" bind:checked={positive}>
	{Math.round(net.state*100)} %
</div>

<style>
	.state {
        margin: 1rem;
    }
</style>
