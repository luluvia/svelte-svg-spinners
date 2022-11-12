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
	<circle cx="12" cy="12" r="0">
		<animate
			id="a"
			begin="0;c.end"
			attributeName="r"
			calcMode="spline"
			{dur}
			values="0;11"
			keySplines=".52,.6,.25,.99"
			fill="freeze"
		/>
		<animate
			begin="0;c.end"
			attributeName="opacity"
			calcMode="spline"
			{dur}
			values="1;0"
			keySplines=".52,.6,.25,.99"
			fill="freeze"
		/>
	</circle>
	<circle cx="12" cy="12" r="0">
		<animate
			id="b"
			begin="a.begin+0.2s"
			attributeName="r"
			calcMode="spline"
			{dur}
			values="0;11"
			keySplines=".52,.6,.25,.99"
			fill="freeze"
		/>
		<animate
			begin="a.begin+0.2s"
			attributeName="opacity"
			calcMode="spline"
			{dur}
			values="1;0"
			keySplines=".52,.6,.25,.99"
			fill="freeze"
		/>
	</circle>
	<circle cx="12" cy="12" r="0">
		<animate
			id="c"
			begin="a.begin+0.4s"
			attributeName="r"
			calcMode="spline"
			{dur}
			values="0;11"
			keySplines=".52,.6,.25,.99"
			fill="freeze"
		/>
		<animate
			begin="a.begin+0.4s"
			attributeName="opacity"
			calcMode="spline"
			{dur}
			values="1;0"
			keySplines=".52,.6,.25,.99"
			fill="freeze"
		/>
	</circle>
</svg>
