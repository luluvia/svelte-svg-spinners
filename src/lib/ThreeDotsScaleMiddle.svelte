<script lang="ts">
	export let size = 24
	export let width = size
	export let height = size
	export let color = 'currentColor'
	export let dur = '0.6s'
	export let viewBox = '0 0 24 24'
	export let ariaBusy = false
	export let ariaHidden = false
	export let ariaLive: 'off' | 'polite' | 'assertive' = 'off'
</script>

<svg
	{width}
	{height}
	class={$$props.class}
	fill={color}
	{viewBox}
	aria-busy={ariaBusy}
	aria-hidden={ariaHidden}
	aria-live={ariaLive}
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="4" cy="12" r="1.5">
		<animate attributeName="r" {dur} values="1.5;3;1.5" repeatCount="indefinite" />
	</circle>
	<circle cx="12" cy="12" r="3">
		<animate attributeName="r" {dur} values="3;1.5;3" repeatCount="indefinite" />
	</circle>
	<circle cx="20" cy="12" r="1.5">
		<animate attributeName="r" {dur} values="1.5;3;1.5" repeatCount="indefinite" />
	</circle>
</svg>
