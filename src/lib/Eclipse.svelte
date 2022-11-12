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
	<path
		d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
	>
		<animateTransform
			attributeName="transform"
			type="rotate"
			{dur}
			values="0 12 12;360 12 12"
			repeatCount="indefinite"
		/>
	</path>
</svg>
