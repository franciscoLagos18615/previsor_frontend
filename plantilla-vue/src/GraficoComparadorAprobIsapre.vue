<template>

    <div id="grafico">

        <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data="data"
            :options="options"
        ></schart>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
export default {
    data() {
        return {
            canvasId: 'myCanvas',
            type: 'bar',
            width: 500,
            height: 400,
            data: [
                {name: 'Isapre Banmedica', value: 15},
                {name: 'Isapre Colmena', value: 30},
                {name: 'Isapre CruzBlanca', value: 40},
                {name: 'Isapre MasVida', value: 10},
            ],
            options: {
                title: 'Grafico que representa la evaluacion positiva de la isapre'
            }
        }
    },
    components:{
        Schart
    }
}

</script>

