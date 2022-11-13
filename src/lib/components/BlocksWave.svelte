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
	<rect x="1" y="1" width="7.33" height="7.33">
		<animate id="a" begin="0;b.end+0.2s" attributeName="x" {dur} values="1;4;1" />
		<animate begin="0;b.end+0.2s" attributeName="y" {dur} values="1;4;1" />
		<animate begin="0;b.end+0.2s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="0;b.end+0.2s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="8.33" y="1" width="7.33" height="7.33">
		<animate begin="a.begin+0.1s" attributeName="x" {dur} values="8.33;11.33;8.33" />
		<animate begin="a.begin+0.1s" attributeName="y" {dur} values="1;4;1" />
		<animate begin="a.begin+0.1s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.1s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="1" y="8.33" width="7.33" height="7.33">
		<animate begin="a.begin+0.1s" attributeName="x" {dur} values="1;4;1" />
		<animate begin="a.begin+0.1s" attributeName="y" {dur} values="8.33;11.33;8.33" />
		<animate begin="a.begin+0.1s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.1s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="15.66" y="1" width="7.33" height="7.33">
		<animate begin="a.begin+0.2s" attributeName="x" {dur} values="15.66;18.66;15.66" />
		<animate begin="a.begin+0.2s" attributeName="y" {dur} values="1;4;1" />
		<animate begin="a.begin+0.2s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.2s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="8.33" y="8.33" width="7.33" height="7.33">
		<animate begin="a.begin+0.2s" attributeName="x" {dur} values="8.33;11.33;8.33" />
		<animate begin="a.begin+0.2s" attributeName="y" {dur} values="8.33;11.33;8.33" />
		<animate begin="a.begin+0.2s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.2s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="1" y="15.66" width="7.33" height="7.33">
		<animate begin="a.begin+0.2s" attributeName="x" {dur} values="1;4;1" />
		<animate begin="a.begin+0.2s" attributeName="y" {dur} values="15.66;18.66;15.66" />
		<animate begin="a.begin+0.2s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.2s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="15.66" y="8.33" width="7.33" height="7.33">
		<animate begin="a.begin+0.3s" attributeName="x" {dur} values="15.66;18.66;15.66" />
		<animate begin="a.begin+0.3s" attributeName="y" {dur} values="8.33;11.33;8.33" />
		<animate begin="a.begin+0.3s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.3s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="8.33" y="15.66" width="7.33" height="7.33">
		<animate begin="a.begin+0.3s" attributeName="x" {dur} values="8.33;11.33;8.33" />
		<animate begin="a.begin+0.3s" attributeName="y" {dur} values="15.66;18.66;15.66" />
		<animate begin="a.begin+0.3s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.3s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
	<rect x="15.66" y="15.66" width="7.33" height="7.33">
		<animate id="b" begin="a.begin+0.4s" attributeName="x" {dur} values="15.66;18.66;15.66" />
		<animate begin="a.begin+0.4s" attributeName="y" {dur} values="15.66;18.66;15.66" />
		<animate begin="a.begin+0.4s" attributeName="width" {dur} values="7.33;1.33;7.33" />
		<animate begin="a.begin+0.4s" attributeName="height" {dur} values="7.33;1.33;7.33" />
	</rect>
</svg>
