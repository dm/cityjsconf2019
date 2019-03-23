<template>
    <section id="schedule" class="hero section schedule ">
        <div class="container">
            <div class="hero-body">
                <div>
                    <app-h2
                        title="Schedule"
                        subtitle="3 days of JS Festivities around the center of London subjects
                        "
                        :is-h2="true"
                        :white="true"
                    >
                    </app-h2>
                </div>
                <div class="columns is-centered">
                    <div class="column is-half-desktop">
                        <div class="column is-12 ">
                            <div class="tabs is-toggle">
                                
                                <ul class="">
                                    <li 
                                        v-for="(date, index) in Days"
                                        v-bind:key="date"
                                        :class="{'is-active':date === chosen}">
                                        <a v-on:click="select(date)"
                                        >
                                            <span v-if="index<2">Day {{index+1}} </span> 
                                            <span v-if="index==2">Conference Day</span> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <app-day
                            :items= 'items'
                            :speakers= 'speakers'
                            :day= 'selectedDate'
                        >
                        </app-day>  
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';
    import day from '@/components/day';

    export default {
        data: function() {
            return {
              chosen: ""
            }
        },
        props: {
            items: Array,
            speakers: Array,
        },
        components: {
            "app-h2" : h2,
            "app-day": day
        },
        methods: {
            select: function (date) {
                this.chosen = date;
            }
        },
        computed: {
            Days() {
              if (typeof this.items!== 'undefined') {
                  return [...new Set(this.items.map(date => date.date))];
              } else {
                  return [];
              }
            },
            selectedDate() {
                if (typeof this.items!== 'undefined') {
                   if (this.chosen === '' && this.items.length > 0) {
                       this.chosen = this.items[0].date;
                   }

                   return this.chosen
                }
            }
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';

  .schedule
    background: $red;
    color: $white;

    .tabs
        li
          a
            background-color: transparent;
            border: none;
            color: $white;
          &.is-active 
            a
              background-color: #c90000;
              border: none;


</style>