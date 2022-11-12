<script lang="ts">
	import { stringDurationToFloat } from './utils'

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
	<ellipse cx="12" cy="5" rx="4" ry="4">
		<animate
			id="f"
			begin="0;r.end"
			attributeName="cy"
			calcMode="spline"
			{dur}
			values="5;20"
			keySplines=".33,0,.66,.33"
			fill="freeze"
		/>
		<animate
			id="b"
			begin="f.end"
			attributeName="rx"
			calcMode="spline"
			dur={stringDurationToFloat(dur) / 7.5}
			values="4;4.8;4"
			keySplines=".33,0,.66,.33;.33,.66,.66,1"
		/>
		<animate
			begin="f.end"
			attributeName="ry"
			calcMode="spline"
			dur={stringDurationToFloat(dur) / 7.5}
			values="4;3;4"
			keySplines=".33,0,.66,.33;.33,.66,.66,1"
		/>
		<animate
			begin="f.end"
			attributeName="cy"
			calcMode="spline"
			dur={stringDurationToFloat(dur) / 7.5}
			values="20;20.5;20"
			keySplines=".33,0,.66,.33;.33,.66,.66,1"
		/>
		<animate id="r" begin="b.end" attributeName="cy" calcMode="spline" {dur} values="20;5" keySplines=".33,.66,.66,1" />
	</ellipse>
</svg>
