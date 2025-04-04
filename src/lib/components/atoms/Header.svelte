<script lang="ts">
	let { isMenuOpen, toggleMenu } = $props();
</script>

<header class="header">
	<button
		onclick={toggleMenu}
		aria-expanded={isMenuOpen}
		aria-controls="navigation-menu"
		aria-label="Menu"
		class="header__menu-icon"
		class:opened={isMenuOpen}
	>
		<span class="bars"></span>
		<span class="bars"></span>
		<span class="bars"></span>
	</button>
</header>

<style lang="scss">
	.header {
		--size-bars-gap: 0.5rem;

		z-index: 900;
		width: 100%;
		position: fixed;
		display: flex;
		justify-content: end;

		&__menu-icon {
			z-index: 1000;
			width: var(--size-top-menu-element);
			height: var(--size-top-menu-element);
			margin-inline-end: var(--size-top-menu-element-margin);
			margin-block-start: var(--size-top-menu-element-margin);
			display: flex;
			align-content: space-between;
			flex-wrap: wrap;
			cursor: pointer;

			&.opened {
				:nth-child(1) {
					background: var(--color-secondary);
					transform: translateY(
							calc((var(--size-top-menu-element) - var(--size-top-menu-element-thickeness)) / 2)
						)
						rotate(45deg);
				}
				:nth-child(2) {
					background: transparent;
				}
				:nth-child(3) {
					background: var(--color-secondary);
					transform: translateY(
							calc(
								(var(--size-top-menu-element) - var(--size-top-menu-element-thickeness)) / 2 * -1
							)
						)
						rotate(-45deg);
				}
			}

			.bars {
				width: 100%;
				height: var(--size-top-menu-element-thickeness);
				transition:
					transform 0.25s ease,
					top 0.25s ease,
					bottom 0.25s ease,
					background 0.5s ease;
				transform-origin: center center;
				background: var(--color-primary);
			}
		}
	}
</style>
