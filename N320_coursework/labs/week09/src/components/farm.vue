<template>
    <div>
        <div class="farm">
            <div v-for="plot in plots"
                class="plot">
                {{ plot.plant }}
            </div>

        </div>
    </div>
</template>
/*creates template for the farm with plots inside.*/

<script>
import GameData from "../GameData.js"
export default {
    data: function() {
        return {
            plots: GameData.plots
        }
    },
    name: "Farm"
}
</script>
/*imports data from gameData and returns new data*/

<style scoped>
    .farm {
        display: flex;
    }
    .plot {
        width: 40px;
        height: 40px;
        margin: 2px;
        border: 1px solid #aaa;
    }
</style>
/*styles farm and changes plot size*/