<template>
    <section class="section ">
      <div class="container ">
        <div class="columns">
         <div class="column is-two">
            <h2 class="title" v-html="title"></h2>
            <p class="subtitle" v-html="description"></p>
            <app-payments 
                v-if="title === 'Buy Tickets'"
            >
            </app-payments>
          </div>
          <div class="column img" :style="style">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    import payments from '@/components/payments';
    export default {
        data: function() {
            return {
                isActive: false
            }
        },
        components: {
            'app-payments': payments
        },
        computed: {
            style () {
                return `background-image: url(//api.spiralthread.com/${this.image.path});`;
            }
        },
        props: {
            title: String,
            description: String,
            image: String,
        }
    };
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    
    .fa-cog
        font-size: 40px

    #learn
        +desktop
        margin-bottom: 2rem

    .pd
        +tablet
        padding: 2em 0

    .img
        display: block
        background-cover:cover
        background-repeat: no-repeat
        width: 100%;
        height: 523px;
        background-position-x: center;
        background-position-y: center;
    
    .about
        width: 100%

        .about-content
            padding: 6.75rem;
       

</style>