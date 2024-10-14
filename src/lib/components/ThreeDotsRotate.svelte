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
  <circle cx="12" cy="12" r="3" />
  <g>
    <circle cx="4" cy="12" r="3" />
    <circle cx="20" cy="12" r="3" />
    <animateTransform
      attributeName="transform"
      type="rotate"
      calcMode="spline"
      {dur}
      keySplines=".36,.6,.31,1;.36,.6,.31,1"
      values="0 12 12;180 12 12;360 12 12"
      repeatCount="indefinite"
    />
  </g>
</svg>
