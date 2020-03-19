<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Item></Item>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
import Item from './todo/item.vue'
export default {
 components:{
     Header,
     Footer,
     Todo,
     Item,
 }
};
</script>

<style lang="stylus" scoped>
#app{
    position absolute;
    left 0;
    right 0;
    top 0;
    bottom 0;
}
#cover{
    position absolute;
    left 0;
    top 0;
    right 0;
    bottom 0;
    background-color #BDFCC9;
    opacity .7;
    z-index -1;
}
</style>
