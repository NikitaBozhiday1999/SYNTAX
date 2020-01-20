<template>
  <div id="app">
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <students :items="students"></students>
        </b-col>

        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Students from './views/Students.vue';

export default {
  components: {
    Students
  },
  data() {
    return {
      students: [
        { id: 1, name: 'Сергей', project: 2, email: 'sergey@mail.com' },
        { id: 2, name: 'Нина', project: 2, email: 'nina@mail.com' },
        { id: 3, name: 'Леша', project: 2, email: 'alex@mail.com' },
      ]
    };
  }
};
</script>


