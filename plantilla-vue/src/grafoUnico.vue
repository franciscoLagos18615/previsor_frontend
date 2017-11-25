<template>
<div id="centerDiv">

<svg width="700" height="400"></svg>
<modal name="tweet"
       :width="500"
       :height="'auto'"
       :pivotY= "0.8"
       :clickToClose=false
       :scrollable=true
       @before-open="beforeOpen"
       @before-close="beforeClose">
          <button id="buttonEscape" @click="$modal.hide('tweet')">
            x
          </button>
        <component-view :id="'920293223519617031'"></component-view>



</modal>
</div>

</template>

<script>
import * as d3 from 'd3';

import { Tweet, Moment } from 'vue-tweet-embed'


export default {

  name: 'grafoUnico',
  components:{
        d3,
        'component-view': Tweet,
    },
  props: {

  },

  data(){
    return{
      nodos:[],
      twits:[],
      toggle: 0,
      X:0,
      Y:0,

    }
  },
  methods: {

  method:function(){
    console.log('hola');
  },


  show (unvar) {
  console.log(unvar);
      this.$modal.show('tweet');
    },
    hide () {
      this.$modal.hide('tweet');
      },
      beforeOpen (event) {


      },
      beforeClose (event) {
      }



  },
  computed: {
  },
    mounted:function(){

    this.$http.get('http://localhost:8082/previsor-back/prestador/')
    .then(response=>{
        this.nodos = response.body;
        this.$http.get('http://localhost:8082/previsor-back/prestador/')
        .then(response=>{

        this.twits = response.body;

        var nodes = this.nodos;
        var tuits = this.twits

        this.toggle = 0;
        var w = 640;
          var h = 500;
          var dataset = {
            nodes:[
                {name:"Adam", "alias":"James", "color":"black"},
                {name:"Bob", "alias":"James2", "color":"green"},
                {name:"Carrie", "alias":"James3", "color":"red"},
                {name:"Donovan", "alias":"James4", "color":"blue"},
                {name:"Edward", "alias":"James5", "color":"yellow"},
                {name:"Felicity", "alias":"James6", "color":"orange"},
                {name:"George", "alias":"James7", "color":"purple"},
                {name:"Hannah", "alias":"James8", "color":"lightblue"},
                {name:"Iris", "alias":"James9", "color":"cyan"},
                {name:"Jerry", "alias":"James10", "color":"grey"}
            ],
            edges:[
                {source: 0, target: 1},
                {source: 0, target: 2},
                {source: 0, target: 3},
                {source: 0, target: 4},
                {source: 1, target: 5},
                {source: 2, target: 5},
                {source: 2, target: 5},
                {source: 3, target: 4},
                {source: 5, target: 8},
                {source: 5, target: 9},
                {source: 6, target: 7},
                {source: 7, target: 8},
                {source: 8, target: 9},

            ]
          };
          var force = d3.layout.force()
                      .nodes(dataset.nodes)
                      .links(dataset.edges)
                      .size([w, h])
                      .linkDistance([100])
                      .charge([-150])
                      .start();


          var colors = d3.scale.category10();
          var svg = d3.select("svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");
          var edges = svg.selectAll("line")
                  .data(dataset.edges)
                  .enter()
                  .append("line")
                  .style("stroke", "#777")
                  .style("stroke-width", 2);
          var nodes = svg.selectAll("circle")
                  .data(dataset.nodes)
                  .enter()
                  .append("circle")
                  .attr('r', function (d) { return (d.weight*w*0.01); })
                  .style("fill", function(d, i){
                    return colors(i);
                  })
                  .style("stroke", "black")
                  .style("stroke-width", 3)
                  .call(force.drag)
                  .on("dblclick",this.show);

          var label = svg.selectAll(".mytext")
                  .data(dataset.nodes)
                  .enter()
                  .append("text")
                    .text(function (d) { return d.alias; })
                    .style("text-anchor", "middle")
                    .style("font-family", "Arial")
                    .style("font-size", 12)
                    .attr("dx", 0)
                    .attr("dy", -14)
                    .on("click", function(d) {
                    console.log(this.toggle);
                    if(this.toggle == null) this.toggle=0;
                     if (this.toggle == 0){
                         d3.select(this).text(d.name);
                         this.toggle = 1;
                    }
                     else{
                         d3.select(this).text(d.alias);
                         this.toggle = 0;
                     }
                   }
             );


          force.on("tick", function(){
            edges.attr("x1", function(d){ return d.source.x; })
               .attr("y1", function(d){ return d.source.y; })
               .attr("x2", function(d){ return d.target.x; })
               .attr("y2", function(d){ return d.target.y; });
            nodes.attr("cx", function(d){ return d.x; })
               .attr("cy", function(d){ return d.y; });
            label.attr("x", function(d){ return d.x; })
                 .attr("y", function (d) {return d.y - 10; });
          });




        }, response=>{
           console.log('error cargando los prestadores');
        });
    }, response=>{
       console.log('error cargando los prestadores');
    });
    // Let's first

  }
}

</script>

<style>

button#buttonEscape{
    background: red;
    border: none;
    color: white;
    inline-align: right;

}
.node{

	fill:#ccc;
	stroke: #fff;
	stroke-width: 2px;
}
.link {
	stroke: #777;
	stroke-width:2px;

}
div#centerDiv {
			 width: 100%;
			 text-align: center;
	 }


</style>
