<template>
    <div class="container">
    <div class="card">
        <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
            <i class="checkmark">❌</i>
        </div>
        <h1 class="h1-text">Failure</h1>
        <p class="p-text">Sorry something went wrong !<br /> Please try again !</p>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.h1-text {
    color: #F92F60;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
    text-align: center;
}

.p-text {
    color: #404F5E;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    margin: 0;
}

.checkmark {
    font-size: 100px;
    line-height: 200px;
    margin-left: 25px;
}

.card {
    // max-width: 500px;
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #C8D0D8;
    display: inline-block;
    margin: 0 auto;
}
</style>