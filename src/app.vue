<template>
    <div class="container">
        {{msg}}
    </div>
</template>
<script>
    default {
        name :'App',
        data(){
            return {
                msg : 'hello '
            }
        }
    }
</script>
<style>
*{
    padding:0;
    margin:0;
    list-style:none;
}
    .container{
        height:auto;
        width:100%;
    }
</style>