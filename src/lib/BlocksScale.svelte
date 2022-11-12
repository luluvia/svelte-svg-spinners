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
	<rect x="1.5" y="1.5" rx="1" width="9" height="9">
		<animate
			id="a"
			begin="0;b.end+0.15s"
			attributeName="x"
			{dur}
			values="1.5;.5;1.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="0;b.end+0.15s"
			attributeName="y"
			{dur}
			values="1.5;.5;1.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="0;b.end+0.15s"
			attributeName="width"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="0;b.end+0.15s"
			attributeName="height"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
	</rect>
	<rect x="13.5" y="1.5" rx="1" width="9" height="9">
		<animate
			begin="a.begin+0.15s"
			attributeName="x"
			{dur}
			values="13.5;12.5;13.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.15s"
			attributeName="y"
			{dur}
			values="1.5;.5;1.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.15s"
			attributeName="width"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.15s"
			attributeName="height"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
	</rect>
	<rect x="13.5" y="13.5" rx="1" width="9" height="9">
		<animate
			begin="a.begin+0.3s"
			attributeName="x"
			{dur}
			values="13.5;12.5;13.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.3s"
			attributeName="y"
			{dur}
			values="13.5;12.5;13.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.3s"
			attributeName="width"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.3s"
			attributeName="height"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
	</rect>
	<rect x="1.5" y="13.5" rx="1" width="9" height="9">
		<animate
			id="b"
			begin="a.begin+0.45s"
			attributeName="x"
			{dur}
			values="1.5;.5;1.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.45s"
			attributeName="y"
			{dur}
			values="13.5;12.5;13.5"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.45s"
			attributeName="width"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
		<animate
			begin="a.begin+0.45s"
			attributeName="height"
			{dur}
			values="9;11;9"
			keyTimes="0;.2;1"
		/>
	</rect>
</svg>
