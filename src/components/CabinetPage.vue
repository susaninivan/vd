<template>
  <div>
    <h1>Кабинет пользователя</h1>
    <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p>
    <button type="button" class="btn btn-primary" @click="openModal">
      Подробнее
    </button>
    <ModalVue
      v-if="isModalOpen"
      title="Пользовательское соглашение"
      @close="isModalOpen = false"
    >
      <div class="information">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
      </div>
    </ModalVue>

    <midi-player
      src="https://magenta.github.io/magenta-js/music/demos/melody.mid"
      sound-font
      visualizer="#myVisualizer"
    >
    </midi-player>
    <midi-visualizer type="piano-roll" id="myVisualizer"></midi-visualizer>
    <!-- <midi-player
  src="https://susaninivan.github.io/midi/BUMER2.mid"
  sound-font visualizer="#myVisualizer">
</midi-player> -->
    <midi-visualizer type="piano-roll" id="myVisualizer"></midi-visualizer>

    <!-- <midi-player src="https://susaninivan.github.io/midi/Solveig.mid"></midi-player> -->
    <midi-player
      src="https://susaninivan.github.io/midi/Solveig.mid"
      sound-font
      visualizer="#myVisualizer"
    >
    </midi-player>
    <midi-visualizer type="piano-roll" id="myVisualizer"></midi-visualizer>
  </div>
</template>

<script>
import ModalVue from "./ModalVue";
export default {
  components: { ModalVue },
  name: "CabinetPage",
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>