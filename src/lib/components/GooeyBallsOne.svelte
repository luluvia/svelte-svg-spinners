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
	<defs>
		<filter id="g">
			<feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="b" />
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
		<circle cx="4" cy="12" r="3">
			<animate
				attributeName="cx"
				calcMode="spline"
				{dur}
				values="4;9;4"
				keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="r"
				calcMode="spline"
				{dur}
				values="3;8;3"
				keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="15" cy="12" r="8">
			<animate
				attributeName="cx"
				calcMode="spline"
				{dur}
				values="15;20;15"
				keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="r"
				calcMode="spline"
				{dur}
				values="8;3;8"
				keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
				repeatCount="indefinite"
			/>
		</circle>
	</g>
</svg>
