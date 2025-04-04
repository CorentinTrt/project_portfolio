<script lang="ts">
	import '$lib/styles/index.scss';

	import Header from '$lib/components/atoms/Header.svelte';
	import Menu from '$lib/components/moleculs/Menu.svelte';

	let { children } = $props();

	let isMenuOpen = $state(false);
	let isMobileMenuContentOpen = $state(false);

	const toggleMenuHandler = () => {
		isMenuOpen ? closeMenu() : openMenu();
	};
	const openMenu = () => {
		isMenuOpen = true;
	};
	const closeMenu = () => {
		isMenuOpen = false;
		closeMobileMenuContent();
	};
	const openMobileMenuContent = () => {
		isMobileMenuContentOpen = true;
	};
	const closeMobileMenuContent = () => {
		isMobileMenuContentOpen = false;
	};
</script>

<div class="app">
	<Header {isMenuOpen} toggleMenu={toggleMenuHandler} />

	<Menu {isMenuOpen} {isMobileMenuContentOpen} {openMobileMenuContent} {closeMobileMenuContent} />

	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
