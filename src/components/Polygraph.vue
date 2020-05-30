<template>
  <g>
    <polygon :points="points"></polygon>
    <Axislabel
      :key="index"
      v-for="(stat, index) in stats"
      :stat="stat"
      :index="index"
      :total="stats.length"
    ></Axislabel>
  </g>
</template>
<script>
import Axislabel from "./Axislabel";

export default {
  name: "Polygraph",
  components: {
    Axislabel
  },
  props: {
      stats: Array,
  },
  data() {
    return {
    };
  },
  computed: {
    // a computed property for the polygon's points
    points: function() {
      var total = this.stats.length;
      console.log(this.stats);
      return this.stats.map((stat, i) => {
            console.log(stat)
            console.log(this.valueToPoint)
          var point = this.valueToPoint(stat.value, i, total);
          return point.x + "," + point.y;
        })
        .join(" ");
    }
  },
  methods: {
      valueToPoint(value, index, total) {
        var x = 0;
        var y = -value * 0.8;
        var angle = ((Math.PI * 2) / total) * index;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var tx = x * cos - y * sin + 100;
        var ty = x * sin + y * cos + 100;
        return {
          x: tx,
          y: ty
        };
      }
    }
};
</script>
<style scoped>
body {
    font-family: Helvetica Neue, Arial, sans-serif;
}

polygon {
    fill: #42b983;
    opacity: .75;
}

text {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 10px;
    fill: #666;
}

label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

#raw {
    position: absolute;
    top: 0;
    left: 300px;
}
</style>