<template>
    <section>
        <div class="container heading">
            <div class="columns has-text-centered">
                <div class="column">
                    <h2
                        v-bind:class="[white ? 'white-thin-heading' : 'thin-heading']"
                        v-if="isH2"
                        v-html="title"
                    ></h2>
                    <h3 
                        v-if="!isH2" 
                        v-html="title"
                        v-bind:class="[white ? 'white' : '']"
                    >
                    </h3>
                    <p 
                        v-html="subtitle"
                        v-bind:class="['subtitle', white ? 'white' : '']"
                    >
                    </p>
                    <div class="has-text-centered"> 
                        <span class="flag">
                        </span>  
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            title: String,
            subtitle: String,
            isH2: Boolean,
            white: Boolean
        }
    };
</script>
<style lang="sass">
    @import '~/assets/css/mq.sass';

    .heading
        margin-bottom: 20px;
    
    .white
        color: $white;
    
    .white-thin-heading:after
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 13px solid $white;
        background-color: $white;
        border-left: 55px solid $white;
        border-right: 55px solid $white;
        position: absolute;
        left: 50%;
        margin-left: -55px;
    
    .white-thin-heading
        padding: 20px;
        .subtitle
            font-weight: bold; 
            text-transform: capitalize;
    
    .thin-heading
        padding: 20px;
        .subtitle
            font-weight: bold; 
            text-transform: capitalize;
    
    .thin-heading:after
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 13px solid $red;
        background-color: $red;
        border-left: 55px solid $red;
        border-right: 55px solid $red;
        position: absolute;
        left: 50%;
        margin-left: -55px;
</style>