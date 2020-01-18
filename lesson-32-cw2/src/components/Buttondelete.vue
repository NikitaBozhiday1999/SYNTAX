<template>
    <button class="btn waves-effect waves-light" 
            @click="$emit('del')"> 
        <slot name="delete"></slot> 
    </button>
</template>

<style lang="scss" scoped>
    .btn {
        width: 100%;
    }
</style>