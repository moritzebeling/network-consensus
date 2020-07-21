<script>

	import Canvas from './components/Canvas.svelte';
	import Controls from './components/Controls.svelte';
	import Container from './components/Container.svelte';

	import { Network } from './classes/network.js';

	const model = new Network( 11 );
	console.log( model );

</script>

<Canvas />
<Container {model} />
<!-- <Controls /> -->
