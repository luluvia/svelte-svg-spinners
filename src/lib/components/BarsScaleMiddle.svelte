<script lang="ts">
	export let size = 24
	export let width = size
	export let height = size
	export let color = 'currentColor'
	export let dur = '0.6s'
	export let viewBox = '0 0 24 24'
	export let ariaHidden = false
</script>

<svg
	{width}
	{height}
	class={$$props.class}
	fill={color}
	{viewBox}
	aria-hidden={ariaHidden}
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="1" y="6" width="2.8" height="12">
		<animate
			begin="a.begin+0.4s"
			attributeName="y"
			calcMode="spline"
			{dur}
			values="6;1;6"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
		<animate
			begin="a.begin+0.4s"
			attributeName="height"
			calcMode="spline"
			{dur}
			values="12;22;12"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
	</rect>
	<rect x="5.8" y="6" width="2.8" height="12">
		<animate
			begin="a.begin+0.2s"
			attributeName="y"
			calcMode="spline"
			{dur}
			values="6;1;6"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
		<animate
			begin="a.begin+0.2s"
			attributeName="height"
			calcMode="spline"
			{dur}
			values="12;22;12"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
	</rect>
	<rect x="10.6" y="6" width="2.8" height="12">
		<animate
			id="a"
			begin="0;b.end-0.1s"
			attributeName="y"
			calcMode="spline"
			{dur}
			values="6;1;6"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
		<animate
			begin="0;b.end-0.1s"
			attributeName="height"
			calcMode="spline"
			{dur}
			values="12;22;12"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
	</rect>
	<rect x="15.4" y="6" width="2.8" height="12">
		<animate
			begin="a.begin+0.2s"
			attributeName="y"
			calcMode="spline"
			{dur}
			values="6;1;6"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
		<animate
			begin="a.begin+0.2s"
			attributeName="height"
			calcMode="spline"
			{dur}
			values="12;22;12"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
	</rect>
	<rect x="20.2" y="6" width="2.8" height="12">
		<animate
			id="b"
			begin="a.begin+0.4s"
			attributeName="y"
			calcMode="spline"
			{dur}
			values="6;1;6"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
		<animate
			begin="a.begin+0.4s"
			attributeName="height"
			calcMode="spline"
			{dur}
			values="12;22;12"
			keySplines=".14,.73,.34,1;.65,.26,.82,.45"
		/>
	</rect>
</svg>
