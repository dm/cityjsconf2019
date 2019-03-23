<template>
  <section>
  <div class="timer container">
    <div class="columns">
        <div class="column is-8">
          <h2> 
              3 days of JS Festivities including, <br/>10 International <a href="/speakers">Speakers</a>, 
              6 Free <a href="/workshops">Workshops</a>
               <br/>
              <span>focused on <br/>
              core JavaScript, frameworks, NodeJS,  Machine Learning,  Artificial 
                Intelligence, <br/> Web Assembly, Data streams, Server Side Rendering &amp; Performance</span>
          </h2>
        </div>
        <div class="column is-4">
            <div class="columns is-mobile is-8-desktop">
            <div class="block column is-2-desktop is-3-mobile">
              <span>{{ days }}</span><br/>
              {{ wordString.day }}
            </div>
            <div class="block column is-2-desktop  is-3-mobile  is-offset-1-desktop">
              <span>{{ hours }}</span><br/>
              {{ wordString.hours }}
            </div>
            <div class="block column is-2-desktop  is-3-mobile is-offset-1-desktop">
              <span>{{ minutes }}</span><br/>
              {{ wordString.minutes }}
            </div>
            <div class="block column is-2-desktop is-3-mobile is-offset-1-desktop">
              <span>{{ seconds }}</span><br/>
              {{ wordString.seconds }}
            </div>
            </div>
        </div>
      </div>
  </div>
  </section>
</template>

<script>
    export default {
        data:function() {
          return {
            timer:"",
            wordString: {
                  day: "Days",
                  hours: "Hrs", 
                  minutes: "Min", 
                  seconds: "Sec", 
                  expired: "Event has been expired.", 
                  running: "Till the end of event.",
                  upcoming: "Till start of event.",
                  status: {
                      expired: "Expired",
                      running: "Running",
                      upcoming: "Future"
            }},
            start: "",
            end: "",
            interval: "",
            days:"",
            minutes:"",
            hours:"",
            seconds:"",
            message:"",
            statusType:"",
            statusText: "",
          }    
        },
        async mounted(){
            this.start = new Date(this.starttime).getTime();
            this.end = new Date(this.endtime).getTime();
            // Update the count down every 1 second
            this.timerCount(this.start,this.end);
            this.interval = setInterval(() => {
                this.timerCount(this.start,this.end);
            }, 1000);
        },
        methods: {
            timerCount: function(start,end){
                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = start - now;
                var passTime =  end - now;

                if(distance < 0 && passTime < 0){
                    this.message = this.wordString.expired;
                    this.statusType = "expired";
                    this.statusText = this.wordString.status.expired;
                    clearInterval(this.interval);
                    return;

                }else if(distance < 0 && passTime > 0){
                    this.calcTime(passTime);
                    this.message = this.wordString.running;
                    this.statusType = "running";
                    this.statusText = this.wordString.status.running;

                } else if( distance > 0 && passTime > 0 ){
                    this.calcTime(distance); 
                    this.message = this.wordString.upcoming;
                    this.statusType = "upcoming";
                    this.statusText = this.wordString.status.upcoming;
                }
            },
            calcTime: function(dist){
            // Time calculations for days, hours, minutes and seconds
                this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
            }
        },
        components: {
        },
        props: {
            starttime: String,
            endtime: String,
            trans: String
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';
  h2 
    color: $black
    font-size: 1.875rem;
    line-height: 1.9rem;
    text-transform: none;
    padding: 20px;
    span
      font-size: 1rem;
      line-height: 1rem;
      +mobile
        line-height: 2rem;
        font-size: 1.2rem;
        padding: 10px;

  .timer
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 40px
    font-size: 0.9rem;
    background: $white;
    margin-top: 0vw;
    top: -50px;
    +mobile
      background: $white;
      padding: 20px;
      position: absolute;
      left: 0%;
      top: 100vw;
      width: 100%;
    a
      color: $darkred;
    .block
      background-color: $black;
      height: 20px
      min-height: 70px;
      margin-top: 40px;
      font-size: 1.1rem;
      font-weight: bold;
    .day
    .hour
    .min 
    .sec
      border-left: 1px solid $black;
      display: inline-block;
      font-weight: 500;
      text-align: center;
      margin: 0 5px;
      .format
        font-weight: 300;
        font-size: 14px;
        opacity: 0.8;
        width: 60px;

      .message
        font-size: 14px;
        font-weight: 400;
        margin-top: 5px;

      .status-tag
        width: 270px;
        margin: 10px auto;
        padding: 8px 0;
        font-weight: 500;
        color: #000;
        text-align: center;
        border-radius: 15px;
        &.upcoming
          background-color: lightGreen;
        &.running
          background-color: gold;
        &.expired
          background-color: silver;
      
       
      
</style>