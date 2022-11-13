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
	<circle cx="4" cy="12" r="3">
		<animate id="a" begin="0;b.end-0.25s" attributeName="r" {dur} values="3;.2;3" />
	</circle>
	<circle cx="12" cy="12" r="3">
		<animate begin="a.end-0.6s" attributeName="r" {dur} values="3;.2;3" />
	</circle>
	<circle cx="20" cy="12" r="3">
		<animate id="b" begin="a.end-0.45s" attributeName="r" {dur} values="3;.2;3" />
	</circle>
</svg>
