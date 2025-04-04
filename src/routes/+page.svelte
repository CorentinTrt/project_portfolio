<script lang="ts">
	import slidersContent from '$lib/constants/slides-content.json';

	type T = {
		default: string;
	};

	let imagesSources = $state(
		import.meta.glob<{ default: string }>(
			'/src/lib/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
			{
				eager: true,
				query: {
					enhanced: true
				}
			}
		)
	);

	let size = $state(0);
</script>

<svelte:head>
	<title>Corentin's portfolio - Home</title>
	<meta
		name="description"
		content="Home page of Corentin's portfolio, software engineer in Montreal"
	/>
</svelte:head>

<svelte:window bind:innerWidth={size} />

<article class="scroller">
	<section class="slide">
		<div class="heading">
			<span class="heading__splits"><h1 class="heading__content">Hello, I'm Corentin</h1></span>
			<span class="heading__splits"><h2 class="heading__content">Software Engineer</h2></span>
		</div>
	</section>

	{#each slidersContent as item, i}
		<section class="slide">
			<div class="slide__left">
				<h3 class="title">{item.title}</h3>
				<enhanced:img
					class="image"
					src={imagesSources[`/src/lib/images/${item.imageSrc}`].default}
					alt="An alt text"
				/>
				{#if size < 768}
					<p class="hint">Swip left to check the project</p>
				{/if}
			</div>

			<div class="slide__right">
				<div class="content">
					<p class="content__intro">{item.intro}</p>
					<p class="content__job">{item.job}</p>
					<div class="content__stack">
						{#each item.tools as tool, i}
							<img
								alt="Svelte"
								width="45px"
								src={`https://api.iconify.design/${tool}.svg?color=%23fffcf2`}
							/>
						{/each}
					</div>
					<div class="content__link">
						<a href={item.link} target="_blank">> See project</a>
					</div>
				</div>
			</div>
		</section>
	{/each}
</article>

<style lang="scss">
	.scroller {
		@mixin animation($str) {
			-webkit-animation: #{$str};
			-moz-animation: #{$str};
			-ms-animation: #{$str};
			-o-animation: #{$str};
			animation: #{$str};
		}

		@keyframes fade-in-heading {
			0% {
				transform: (translateY(100%));
				opacity: 0;
			}

			100% {
				transform: (translateY(0%));
				opacity: 1;
			}
		}

		& {
			height: 100vh;
			overflow-y: scroll;
			scroll-snap-type: y mandatory;
		}

		section {
			scroll-snap-align: start;
		}

		.slide {
			height: 100vh;
			min-height: 100vh;
			display: flex;
			scroll-snap-align: start;
			text-align: center;

			overflow-x: scroll;
			scroll-snap-type: x mandatory;

			&::-webkit-scrollbar {
				height: 0;
				width: 0;
				background: transparent;
			}

			&__left {
				position: relative;
				width: 100vw;
				min-width: 100vw;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				scroll-snap-align: start;
				background: green;

				@media screen and (min-width: 768px) {
					width: 50vw;
					min-width: 50vw;
				}

				.title {
					z-index: 700;
					text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
				}

				.image {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

				.hint {
					position: absolute;
					bottom: 2rem;
					right: 2rem;
				}
			}

			&__right {
				width: 100vw;
				min-width: 100vw;
				height: 100%;
				scroll-snap-align: start;

				@media screen and (min-width: 768px) {
					width: 50vw;
					min-width: 50vw;
				}

				.content {
					height: 100%;
					padding: 1.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 1.5rem;
					text-align: right;

					@media screen and (min-width: 768px) {
						padding: 2.5rem;
					}

					&__job {
						width: 100%;
					}

					&__stack {
						display: flex;
						justify-content: end;
						gap: 0.5rem;
						width: 100%;
					}

					&__link {
						width: 100%;

						a {
							color: var(--color-primary);
						}
					}
				}
			}

			.heading {
				height: 100%;
				width: 100%;
				padding: 1.5rem;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 6rem;
				color: var(--color-primary);
				letter-spacing: 1rem;
				line-height: 3rem;
				text-transform: uppercase;

				&__splits {
					width: 100%;
					display: block;
					overflow: hidden;

					&:nth-child(2) {
						:nth-child(1) {
							animation-delay: 300ms;
						}
					}
					&:nth-child(3) {
						:nth-child(1) {
							animation-delay: 500ms;
						}
					}
				}

				&__content {
					overflow: hidden;
					display: block;
					transform: (translateY(100%));
					@include animation('fade-in-heading 2.5s ease forwards');
				}
			}

			.presentation {
				width: 100%;
				text-align: center;
				margin-block-end: 3rem;
			}

			.features {
				width: 100%;
				padding: 1rem;
				background-color: var(--color-surface);
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
			}
		}
	}
</style>
