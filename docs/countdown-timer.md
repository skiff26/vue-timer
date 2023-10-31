---
outline: deep
---

# Countdown Timer

## Template

```HTML
<template>
	<label>
		Time left: <progress :value="progressRate"></progress>
	</label>

	<div>{{ (left / 1000).toFixed(1) }}s</div>

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
const left = ref(duration.value)

let startDate, handle

const update = () => {
left.value = Math.max(0, startDate - new Date())
if (left.value <= 0) {
	cancelAnimationFrame(handle)
} else {
	handle = requestAnimationFrame(update)
}
}

const reset = () => {
left.value = duration.value
startDate = new Date().setMilliseconds(duration.value)
update()
}

const progressRate = computed(() =>
Math.min(left.value / duration.value, 1)
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
			left,
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
      left: this.duration
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
      return Math.min(this.left / this.duration, 1)
    }
  },
  methods: {
    update() {
      this.left = Math.max(0, this.startDate - new Date())
      if (this.left <= 0) {
        cancelAnimationFrame(this.handle)
      } else {
        this.handle = requestAnimationFrame(this.update)
      }
    },
    reset() {
      this.left = this.duration
      this.startDate = new Date().setMilliseconds(this.duration)
      this.update()
    }
  }
}
```
