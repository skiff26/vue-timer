---
outline: deep
---

# Timer

## Template

```HTML
<template>
	<label>
		Elapsed Time: <progress :value="progressRate"></progress>
	</label>

	<div>{{ (elapsed / 1000).toFixed(1) }}s</div>

	<div>
		Duration: <input type="range" v-model="duration" min="1" max="30000">
		{{ (duration / 1000).toFixed(1) }}s
	</div>

	<button @click="reset">Reset</button>
</template>
```

## Composition API

It's an example for `<scipt setup>`.

```JavaScript
import { ref, onUnmounted, computed } from 'vue'
const duration = ref(15 * 1000)
const elapsed = ref(0)

let lastTime
let handle

const update = () => {
  elapsed.value = performance.now() - lastTime
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle)
  } else {
    handle = requestAnimationFrame(update)
  }
}

const reset = () => {
  elapsed.value = 0
  lastTime = performance.now()
  update()
}

const progressRate = computed(() =>
  Math.min(elapsed.value / duration.value, 1)
)

reset()

onUnmounted(() => {
  cancelAnimationFrame(handle)
})
```

If you are using the Option API style with `setup()`, you need to return certain variables and computed properties:

```JavaScript
export default {
	setup() {
		return {
			duration,
			elapsed,
			progressRate,
			reset
		}
	}
}
```

## Options API

```JavaScript
export default {
  data() {
    return {
      duration: 15 * 1000,
      elapsed: 0
    }
  },
  created() {
    this.reset()
  },
  unmounted() {
    cancelAnimationFrame(this.handle)
  },
  computed: {
    progressRate() {
      return Math.min(this.elapsed / this.duration, 1)
    }
  },
  methods: {
    update() {
      this.elapsed = performance.now() - this.lastTime
      if (this.elapsed >= this.duration) {
        cancelAnimationFrame(this.handle)
      } else {
        this.handle = requestAnimationFrame(this.update)
      }
    },
    reset() {
      this.elapsed = 0
      this.lastTime = performance.now()
      this.update()
    }
  }
}
```
