<template>
  <div id="app" class="container">
            <div class="row">
                <!-- Preloader -->

                <preloader  v-if="isLoading"></preloader>

                <!-- TODO List -->

                <ul class="collection with-header" v-else>
                    <li class="collection-header">
                        <todo-header>
                            <template #title> Список дел: </template>

                            <done-todo
                                :done-todos="doneTodos"
                                :todo-items="todoItems"
                            ></done-todo>
                    
                            <form class="row" @submit.prevent="addNewTodo">
                                
                                <input-com v-model="newTodo"></input-com>
                                
                                <button-component> 
                                    <template> Добавить </template>  
                                </button-component>
                                
                            </form>
                            
                        </todo-header>
                    </li>
                    <todo-item
                        v-for = "(item, index) in todoItems" 
                        :key  = "item.id"
                        :is-checked = "item.isChecked"
                        @remove-item = "removeTodoItem(index)"
                        @edit-item = "editNewTodo(index)"
                        @checked-change = "item.isChecked = $event"
                    >
                        {{ item.text }}
                    </todo-item>
                <button-component @click.native="deleteAllTodo" :style="{ width: '100%' }">
                    <template> Удалить </template>
                </button-component>
                </ul> 
            </div>
        </div>
</template>

<script>
import preloaderComponent from './components/Preloader.vue'
import todoItemComponent from './components/Todoitem.vue'
import todoHeaderComponent from './components/Todoheader.vue'
import doneTodosComponent from './components/Badge.vue'
import addButtonComponent from './components/Button.vue'
import inputComponent from './components/Input.vue'
import deleteButtonComponent from './components/Buttondelete.vue'



export default {
    components: {
        preloader: preloaderComponent,
        todoItem: todoItemComponent,
        todoHeader: todoHeaderComponent,
        doneTodo: doneTodosComponent,
        buttonComponent: addButtonComponent,
        inputCom: inputComponent,
        deleteButton: deleteButtonComponent,
    },
    data() { 
        return {
          isChecked: false,
          isLoading: true,
          newTodo: '',
          todoItems: [
              { id: 1, text: 'Переписать тест по Javascript', isChecked: false },
              { id: 2, text: 'Повторить Git', isChecked: false },
              { id: 3, text: 'Доделать проект по JS', isChecked: false },
              { id: 4, text: 'Выучить Vue.js', isChecked: false },
              { id: 5, text: 'Повторить HTML&CSS', isChecked: false }
          ]
        }
    },
    computed: {
        doneTodos() {
            return this.todoItems.filter(item => item.isChecked);
            
        }
    },
    created() {
        this.hidePreloader();
    },
    mounted() {
        if (localStorage.newTodo) {
            this.newTodo = localStorage.newTodo;
        }
        if (localStorage.getItem('todoItems')) {
            this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
        } 
    },
    watch: {
        newTodo(newName) {
            localStorage.newTodo = newName;
        },
        
        doneTodos(newValue) {
            if (!this.todoItems.length) {
                M.toast({ html: 'Список дел пуст!' });
            }
            else if (newValue.length === this.todoItems.length) {
                M.toast({ html: 'Все дела выполнены!' });
            }
        }
    },
    methods: {
        saveTodo() {
            const parsed = JSON.stringify(this.todoItems);
            localStorage.setItem('todoItems', parsed);
        },
        addNewTodo() {
            if (!this.newTodo.length) return;
            
            this.todoItems.push({
                id        : this.todoItems.length + 1,
                text      : this.newTodo,
                isChecked : false
            });
            this.newTodo = '';
            this.saveTodo();
        },
        deleteAllTodo() {
            this.todoItems = [];
            this.saveTodo();
        },

        hidePreloader() {
            setTimeout(() => this.isLoading = false, 2000);
        },

        removeTodoItem(itemIdx) {
            this.todoItems.splice(itemIdx, 1);
            this.saveTodo();
        },
        editNewTodo(itemIdx) {
            let newEdit = prompt('Введите новое задание');
            this.todoItems[itemIdx].text = newEdit;
            this.saveTodo();
        }
    }
}
</script>

<style lang="scss">
  html, body, #app {
    height: 100%;
}

#app {
    padding: 3rem 1rem;
}

#toast-container {
    top   : 1%;
    right : 2%;
}

form.row {
    display       : flex;
    align-items   : center;
    margin-bottom : 0;
}

form.row .col.s11 {
    margin-left: 0;
}

span.badge.new {
    position    : absolute;
    right       : 8px;
    top         : 8px;
    font-weight : 400;
}
</style>

