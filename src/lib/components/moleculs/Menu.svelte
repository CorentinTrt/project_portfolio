<script lang="ts">
	import MenuItems from '$lib/components/atoms/Menu-Items.svelte';

	let { isMenuOpen, isMobileMenuContentOpen, openMobileMenuContent, closeMobileMenuContent } =
		$props();

	let size = $state(0);

	let menuItems = [
		{
			label: 'Intro',
			content: `<p>Hi, I'm Corentin, software engineer in my 6th year of experience. I mostly work on JS/TS, particularly on NodeJs and modern front-end frameworks like React, Vue or Svelte.</p>`
		},
		{
			label: 'Contact',
			content: `<div>
            <p style={{ marginBottom: '3rem' }}>
                Want to work together ? Let's have a talk
            </p>
            <p
                style={{ marginBottom: '2rem', letterSpacing: '0.3rem' }}
            >corentintruffaut @gmail.com</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="https://github.com/CorentinTrt" target="_blank" rel="noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                        width="5rem"
                        height="5rem"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#040614"
                            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8c0-5.4.2-33 .2-55.3c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6c-14.1 0-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 13.9.2 36.5.2 40.6c0 4.3-3 9.5-11.5 8c-66-22.1-112.2-84.9-112.2-158.3c0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7.6 3.9 1.9c.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4c-2.2.2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3c-1.9-.4-3.2-1.9-2.8-3.2c.4-1.3 2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3.6c1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5.6c1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3.7 1.9 1.8 1.5 2.6z"
                        ></path>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/corentin-truffaut-0b42b71aa/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                        width="5rem"
                        height="5rem"
                        viewBox="-1.5 -1.5 19 19"
                    >
                        <path
                            fill="#040614"
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
`
		},
		{
			label: 'Resources',
			content: `
            <a
                href="https://github.com/CorentinTrt/config_nvim"
                target="_blank"
                rel="noreferrer"
            >
                <p style={{ marginBottom: '2rem' }}>- my vim config</p>
            </a>
            <a
                href="https://github.com/CorentinTrt/dotfiles"
                target="_blank"
                rel="noreferrer"
            >
                <p style={{ marginBottom: '2rem' }}>- my dotfiles</p>
            </a>
            <a
                href="https://publish.obsidian.md/corentintrt"
                target="_blank"
                rel="noreferrer"
            >
                <p>- my wiki dev</p>
            </a>`
		}
	];
</script>

<svelte:window bind:innerWidth={size} />

{#if size > 768}
	<article class="menu menu--desktop">
		<div class="side side--left" class:opened={isMenuOpen}>
			<div class="content">
				{#each menuItems as content, i}
					<div class="content__item">
						{@html content.content}
					</div>
				{/each}
			</div>
		</div>
		<div class="side side--right" class:opened={isMenuOpen}>
			<MenuItems {menuItems} openMobileMenuContent={() => {}} />
		</div>
	</article>
{:else}
	<article class="menu menu--mobile" class:opened={isMenuOpen}>
		<div class="side side--left" class:opened={isMobileMenuContentOpen}>
			<div class="content">
				{#each menuItems as content, i}
					<div class="content__item">
						<button
							type="button"
							class="content__arrow"
							aria-label="Close menu content"
							onclick={closeMobileMenuContent}
						></button>
						{@html content.content}
					</div>
				{/each}
			</div>
		</div>

		<div class="side side--right" class:opened={isMenuOpen}>
			<MenuItems {menuItems} {openMobileMenuContent} />
		</div>
	</article>
{/if}

<style lang="scss">
	.menu {
		z-index: 800;

		&--mobile {
			overflow: hidden;
			width: 100%;
			height: 100%;

			.side {
				position: fixed;
				width: 100%;
				height: 100%;
				background: var(--color-primary);
				transition: all 0.6s ease-out;

				&--left {
					z-index: 900;
					left: -100vw;

					&.opened {
						left: 0;
					}

					.content {
						height: max-content;
						display: block;
						padding: 1.5rem;
						transition: all 0.5s ease-out;

						&__item {
							position: relative;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							gap: 1rem;
							color: var(--color-secondary);
							height: 100vh;
						}

						&__arrow {
							z-index: 1000;
							position: absolute;
							width: calc(var(--size-top-menu-element) / 2);
							height: calc(var(--size-top-menu-element) / 2);
							top: var(--size-top-menu-element-margin);
							left: var(--size-top-menu-element-margin);
							border: solid black;
							border-width: 0 var(--size-top-menu-element-thickeness)
								var(--size-top-menu-element-thickeness) 0;
							display: inline-block;
							transform: rotate(135deg);
						}
					}
				}

				&--right {
					z-index: 800;
					right: -100vw;
					display: flex;
					justify-content: center;
					align-items: center;

					&.opened {
						right: 0;
					}
				}
			}
		}

		&--desktop {
			.side {
				position: fixed;
				width: 50%;
				height: 100%;
				background: var(--color-primary);
				transition: all 0.6s ease-out;

				&--left {
					left: -50vw;

					.content {
						height: max-content;
						padding: 1.5rem;
						transform: translateY(100vh);
						transition: all 0.5s ease-out;

						&__item {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							gap: 1rem;
							color: var(--color-secondary);
							height: 100vh;
						}
					}
					&.opened {
						left: 0;
					}
				}

				&--right {
					right: -50vw;
					display: flex;
					justify-content: center;
					align-items: center;

					&.opened {
						right: 0;
					}
				}
			}
		}
	}
</style>
