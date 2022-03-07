<template>
  <body>
    <h1 class="lg:mt-10 lg:text-2xl">PING.</h1>
    <h2 class="lg:mt-5 lg:text-4xl">We are launching <span class=" ">soon!</span></h2>
    <h3 class="lg:text-lg lg:mt-3">Subscribe and get notified</h3>
    <section class=" lg:flex lg:w-[40%] lg:mx-auto lg:mt-7">
    <div class=" lg:w-[70%] lg:mr-4">
    <input :class="{'focus:outline-red border-[#ffb4a2] placeholder:text-[#ffb4a2]': !state}" v-model="email" class="lg:m-0 lg:w-full " type="email" placeholder="Your email address...">
    <p :class="{'hidden' : state}" class="lg:text-left lg:ml-5 ">Please provide a valid email address</p>
    </div>
    <button @click="validate()" class="lg:w-[30%] lg:m-0 lg:hover:bg-[#7697e9] ">Notify me</button>
    </section>
    <img class=" w-[90%] ml-[5%] mt-10 lg:w-[30%] lg:ml-[35%] lg:mt-3" src="../ping-coming-soon-page-master/images/illustration-dashboard.png" alt="">
    <footer class="lg:mt-5 ">
      <img class="  " src="../ping-coming-soon-page-master/images/facebook.svg" alt="">
      <img class="  " src="../ping-coming-soon-page-master/images/twitter.svg" alt="">
      <img class=" " src="../ping-coming-soon-page-master/images/instagram.svg" alt="">
    </footer>

    <p class=" text-xs text-gray text-center my-5">© Copyright Ping. All rights reserved.</p>
  </body>
</template>" type="email">
  

<script>
  export default {
    data() {
      return {
        state: true,
        email: "",
      }
    },

    methods: {
      validate(){
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(this.email.match(pattern))
          this.state = true;
        else
          this.state = false;
      }
    },
  }
</script>