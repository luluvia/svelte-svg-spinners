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
  <path
    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
    transform="translate(12, 12) scale(0)"
  >
    <animateTransform
      id="a"
      begin="0;c.end"
      attributeName="transform"
      calcMode="spline"
      type="translate"
      {dur}
      values="12 12;0 0"
      keySplines=".52,.6,.25,.99"
    />
    <animateTransform
      begin="0;c.end"
      attributeName="transform"
      calcMode="spline"
      additive="sum"
      type="scale"
      {dur}
      values="0;1"
      keySplines=".52,.6,.25,.99"
    />
    <animate begin="0;c.end" attributeName="opacity" calcMode="spline" {dur} values="1;0" keySplines=".52,.6,.25,.99" />
  </path>
  <path
    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
    transform="translate(12, 12) scale(0)"
  >
    <animateTransform
      id="b"
      begin="a.begin+0.2s"
      attributeName="transform"
      calcMode="spline"
      type="translate"
      {dur}
      values="12 12;0 0"
      keySplines=".52,.6,.25,.99"
    />
    <animateTransform
      begin="a.begin+0.2s"
      attributeName="transform"
      calcMode="spline"
      additive="sum"
      type="scale"
      {dur}
      values="0;1"
      keySplines=".52,.6,.25,.99"
    />
    <animate
      begin="a.begin+0.2s"
      attributeName="opacity"
      calcMode="spline"
      {dur}
      values="1;0"
      keySplines=".52,.6,.25,.99"
    />
  </path>
  <path
    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
    transform="translate(12, 12) scale(0)"
  >
    <animateTransform
      id="c"
      begin="a.begin+0.4s"
      attributeName="transform"
      calcMode="spline"
      type="translate"
      {dur}
      values="12 12;0 0"
      keySplines=".52,.6,.25,.99"
    />
    <animateTransform
      begin="a.begin+0.4s"
      attributeName="transform"
      calcMode="spline"
      additive="sum"
      type="scale"
      {dur}
      values="0;1"
      keySplines=".52,.6,.25,.99"
    />
    <animate
      begin="a.begin+0.4s"
      attributeName="opacity"
      calcMode="spline"
      {dur}
      values="1;0"
      keySplines=".52,.6,.25,.99"
    />
  </path>
</svg>
