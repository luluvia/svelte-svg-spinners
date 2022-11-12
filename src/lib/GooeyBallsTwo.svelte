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
	<defs>
		<filter id="g">
			<feGaussianBlur in="SourceGraphic" stdDeviation="1" result="b" />
			<feColorMatrix
				in="b"
				mode="matrix"
				values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
				result="g"
			/>
			<feBlend in="SourceGraphic" in2="g" />
		</filter>
	</defs>
	<g filter="url(#g)">
		<circle cx="5" cy="12" r="4">
			<animate
				attributeName="cx"
				calcMode="spline"
				{dur}
				values="5;8;5"
				keySplines=".36,.62,.43,.99;.79,0,.58,.57"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="19" cy="12" r="4">
			<animate
				attributeName="cx"
				calcMode="spline"
				{dur}
				values="19;16;19"
				keySplines=".36,.62,.43,.99;.79,0,.58,.57"
				repeatCount="indefinite"
			/>
		</circle>
		<animateTransform
			attributeName="transform"
			type="rotate"
			dur={stringDurationToFloat(dur) / (3 / 4)}
			values="0 12 12;360 12 12"
			repeatCount="indefinite"
		/>
	</g>
</svg>
