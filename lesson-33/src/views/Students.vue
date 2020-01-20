<template>
    <b-list-group>
        <b-list-group-item 
            v-for= "item in items"
            :key= "item.id"
            :to = "`/students/${item.id}`"
            :active= "item.id == $route.params.id"
        > {{ item.name }} </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
    props: ['items']
}
</script>