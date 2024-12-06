<template>
  <div>
    <p
      class="error"
      v-if="noFrontCamera"
    >
      You don't seem to have a front camera on your device
    </p>

    <p
      class="error"
      v-if="noRearCamera"
    >
      You don't seem to have a rear camera on your device
    </p>

    <qrcode-stream
      :constraints="constraints"
      @error="onError"
    >
      <button class="button" @click="switchCamera">
        <img
          :src="withBase('/camera-switch.svg')"
          alt="switch camera"
        />
      </button>
      <button class="button2" @click="updateCamera">
        <img
          :src="withBase('/camera-switch.svg')"
          alt="switch camera"
        />
      </button>
    </qrcode-stream>
  </div>
</template>

<script>
import { withBase } from 'vitepress'

import { QrcodeStream } from '../../../../src'

export default {
  components: { QrcodeStream },

  data() {
    return {
      facingMode: 'environment',
      advanced: null,
      noRearCamera: false,
      noFrontCamera: false
    }
  },

  computed: {
    constraints() {
      return {
        facingMode: this.facingMode,
        advanced: this.advanced || undefined
      }
    }
  },

  methods: {
    switchCamera() {
      this.facingMode = this.facingMode === 'environment' ? 'user' : 'environment';
    },
    updateCamera() {
      let advanced = [{ focusMode: 'manual', focusDistance: 0.33 }];
      this.advanced = this.advanced ? null : advanced;
    },

    onError(error) {
      const triedFrontCamera = this.facingMode === 'user'
      const triedRearCamera = this.facingMode === 'environment'

      const cameraMissingError = error.name === 'OverconstrainedError'

      if (triedRearCamera && cameraMissingError) {
        this.noRearCamera = true
      }

      if (triedFrontCamera && cameraMissingError) {
        this.noFrontCamera = true
      }

      console.error(error)
    },

    withBase
  }
}
</script>

<style scoped>
.button {
  position: absolute;
  left: 10px;
  top: 10px;
}
.button img {
  width: 50px;
  height: 50px;
}
.button2 {
  position: absolute;
  left: 75px;
  top: 10px;
}
.button2 img {
  width: 50px;
  height: 50px;
}
.error {
  color: red;
  font-weight: bold;
}
</style>
