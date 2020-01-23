<template>
    <b-row>
        <b-col>
        <b-list-group>
            <b-list-group-item 
                v-for= "item in students"
                :key= "item.id"
                :to = "{ name: 'student', params: { id: item.id } }"
                :active= "item.id == $route.params.id"
                > {{ item.name }} </b-list-group-item>
            </b-list-group>
        </b-col>

        <b-col>
            <router-view></router-view>
        </b-col>
    </b-row>
   
</template>

<script>
export default {
    data() {
        return {
            students: [
                { id: 1, name: 'Сергей', project: 2, email: 'sergey@mail.com' },
                { id: 2, name: 'Нина', project: 2, email: 'nina@mail.com' },
                { id: 3, name: 'Леша', project: 2, email: 'alex@mail.com' },
                { id: 4, name: 'Никита', project: 2, email: 'nikita@mail.com' },
                { id: 5, name: 'Саша', project: 2, email: 'alexander@mail.com' },
                { id: 6, name: 'Андрей', project: 2, email: 'andrew@mail.com' },
            ]
        };
    }
};
</script>