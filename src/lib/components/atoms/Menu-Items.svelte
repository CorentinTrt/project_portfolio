<script lang="ts">
	let { menuItems, openMobileMenuContent } = $props();

	const mouseHoverHandler = (event: Event) => {
		event.preventDefault();
		event.stopPropagation();
		const targetElement = event.target as HTMLElement;
		const targetId = targetElement?.dataset?.targetid;
		const content = document.querySelector('.content') as HTMLElement;
		content.style.transform = `translateY(calc(100vh * ${targetId} * -1)`;
	};
</script>

<ul>
	{#each menuItems as item, i}
		<li class="item" data-targetid={i} onmouseenter={mouseHoverHandler}>
			<button type="button" onclick={openMobileMenuContent}>
				<span class="item__number">0{i}</span>
				<span>{item.label}</span>
			</button>
		</li>
	{/each}
</ul>

<style lang="scss">
	.item {
		display: flex;
		color: var(--color-secondary);
		overflow: hidden;
		cursor: pointer;
		transition: all 0.3s ease-out;

		&:hover {
			transform: scale(110%) translateX(0.7rem);

			/* TODO: update after a fix has been applied on the Svelte SCSS processor */
			.item__number {
				transform: translateY(0);
			}
		}

		/* TODO: apply this approach instead after the fix */
		$this: &;
		&__number {
			display: inline-block;
			margin-inline-end: 1.5rem;
			transform: translateY(100%);
			transition: all 0.3s ease-out;

			#{$this}:hover & {
				transform: translateY(0);
			}
		}
	}

	.item + .item {
		margin-block-start: 3rem;
	}
</style>
