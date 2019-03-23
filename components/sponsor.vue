<template>
    <div v-if="TypedItems.length > 0">
        <h3 class="uppercase" >{{level}}</h3>
        <section class="section">
            <div class="">
                <div class="columns">
                        <div :class="['column has-background is-active', {'middle':item.middle === 'Yes'}]"
                            v-for="item in TypedItems"
                            v-bind:key="item._id"
                        >
                            <a :href="`${item.url}`">
                                 <figure class="sponsor">
                                      <img  v-if="typeof item.image!== 'undefined'" alt="sponsor"  :src="`//api.spiralthread.com/${item.image.path}`">
                                </figure>
                            </a>
                        </div>                
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        props: {
            items: Array,
            level: String
        },
        components: {
            "app-h2" : h2
        },
        computed: {
            TypedItems() {
              if (typeof this.items!== 'undefined') {
                    return this.items.filter(item => {
                    return item.level === this.level;
                })   
              } else {
                  return [];
              }
            
            }
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';
  
  .middle
    display: flex;
    align-items: center;

  .uppercase
    text-transform: uppercase;
</style>