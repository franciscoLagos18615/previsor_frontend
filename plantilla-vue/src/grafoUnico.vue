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
        <component-view :id=tweet></component-view>



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
      nPrestador:{
        type: Number,
        required: true


      }
  },

  data(){
    return{
      tweet:'',
      nodos:[],
      twits:[],
      toggle: 0,
      X:0,
      Y:0,

    }
  },
  methods: {

  method:function(d){
    this.show();
  },


  show (unvar) {
  console.log(unvar);

    console.log(unvar)
    if(unvar.tipo != 1){

      this.tweet = (unvar.idTweet).toString();
      console.log(this.tweet);

        this.$modal.show('tweet');
    }
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
    var n =(this.nPrestador).toString();
    this.$http.get('http://localhost:8082/previsor-back/graph/'+n)
    .then(response=>{
        this.nodos = response.body;


        var graph = this.nodos;
        console.log(graph);

        this.toggle = 0;
        var w = 640;
          var h = 500;
          var force = d3.layout.force()
                      .nodes(graph.nodes)
                      .links(graph.edges)
                      .size([w, h])
                      .linkDistance([100])
                      .charge([-500])
                      .start();


          var colors = d3.scale.category10();
          var svg = d3.select("svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");
          var edges = svg.selectAll("line")
                  .data(graph.edges)
                  .enter()
                  .append("line")
                  .style("stroke", "#777")
                  .style("stroke-width", 1);
          var nodes = svg.selectAll("circle")
                  .data(graph.nodes)
                  .enter()
                  .append("circle")
                  .attr('r', function (d) {
                    if(d.tipo == 2){
                      if(d.lvl > 100000){
                        return (d.lvl*0.00001);
                      }
                      else if(d.lvl <= 100000 && d.lvl > 10000){
                        return (d.lvl*0.0001);



                      }
                      else if(d.lvl <= 10000 && d.lvl > 400){

                        return (d.lvl*0.01);

                      }
                      else{
                        return (d.lvl*0.1);

                      }


                      }
                    else if(d.tipo == 1){
                      return 15;


                    }
                    else {
                      return 5;
                    }

                  })
                  .style("fill", function(d, i){
                    if(d.tipo ==1){
                      if(d.ranking < 5000){
                        return "#f0e837";
                      }
                      else if(d.ranking >= 5000 && d.ranking < 10000){
                        return  "#4e9a4e";
                      }
                      else{
                        return "#ec5148";
                      }


                    }
                    else if(d.tipo == 2){
                       return "lightblue";
                    }
                    else{
                      return "blue";


                    }
                  })
                  .style("stroke", "black")
                  .style("stroke-width", 3)
                  .call(force.drag)
                  .on("dblclick",this.show );

          var label = svg.selectAll(".mytext")
                  .data(graph.nodes)
                  .enter()
                  .append("text")
                    .text(function (d) {
                      if(d.tipo !=3 ){
                        return d.name;
                      }
                       })
                    .style("text-anchor", "middle")
                    .style("font-family", "Arial")
                    .style("font-size", function (d) {
                      if(d.tipo == 1){
                        return 25;
                      }
                      else{
                        return 12;

                      }
                    })
                    .attr("fill", function (d) {
                      if(d.tipo == 1){
                        return "red";
                      }
                      else{
                        return "black";

                      }
                    })
                    .attr("dx", 0)
                    .attr("dy", -14)
                    .on("click", function(d) {
                    console.log(this.toggle);
                       if(d.tipo == 2 || d.tipo ==3){
                          console.log(this.toggle);
                          if(this.toggle == null) this.toggle=0;
                           if (this.toggle == 0){
                               d3.select(this).text(d.name);
                               this.toggle = 1;
                          }
                           else{
                               d3.select(this).text(d.username);

                               this.toggle = 0;
                           }


                       }
                   }
             );
          function hola(){

            this.show;
          }


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
