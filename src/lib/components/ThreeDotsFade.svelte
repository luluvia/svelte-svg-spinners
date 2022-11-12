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
	<circle cx="4" cy="12" r="3" opacity="1">
		<animate
			id="a"
			begin="0;b.end-0.25s"
			attributeName="opacity"
			{dur}
			values="1;.2"
			fill="freeze"
		/>
	</circle>
	<circle cx="12" cy="12" r="3" opacity=".4">
		<animate begin="a.begin+0.15s" attributeName="opacity" {dur} values="1;.2" fill="freeze" />
	</circle>
	<circle cx="20" cy="12" r="3" opacity=".3">
		<animate
			id="b"
			begin="a.begin+0.3s"
			attributeName="opacity"
			{dur}
			values="1;.2"
			fill="freeze"
		/>
	</circle>
</svg>
