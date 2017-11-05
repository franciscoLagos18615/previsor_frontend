<template>
	<li>
		{{ title }}
	    <button v-on:click="$emit('remove')">Borrar</button>
	</li>
</template>

<script>
export default {
    props: {
    	title:{
            type: String,
            required:true
        }
    }
}

</script>
