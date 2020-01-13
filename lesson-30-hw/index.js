// M.toast({ html: 'Все дела выполнены!' });

let vm = new Vue({
    el: '#app',
    data: {
        isChecked: false,
        isLoading: true,
        newTodo: '',
        todoItems: [
            { id: 1, text: 'Переписать тест по JavaScript', isChecked: false },
            { id: 2, text: 'Переписать тест по HTML', isChecked: false },
            { id: 3, text: 'Переписать тест по CSS', isChecked: false },
            { id: 4, text: 'Переписать тест по Git', isChecked: false },
            { id: 5, text: 'Переписать тест по Sass', isChecked: false }
        ]
    },    
    computed: {
        doneTodos() {
            return this.todoItems.filter(item => item.isChecked);
        }
    },
    created() {
        this.hideLoader();
    },
    watch: {
        doneTodos(newValue) {
            if (newValue.length === this.todoItems.length) {
                M.toast({ html: 'Все дела выполнены!' });
            }
        }
    },
    methods: {
        hideLoader() {
            setTimeout(() => this.isLoading = false, 1000);
        },
        addNewTodo() {
            if (!this.newTodo.trim().length) return;

            this.todoItems.push({
                id: this.todoItems.length + 1,
                text: this.newTodo,
                isChecked: false
            });
            
            this.newTodo = '';
        }, 
       deleteTodoEl(itemId) {
            this.todoItems.splice(itemId, 1);
        },
        editNewTodo(itemId) {
            let newEdit = prompt('Введите новое задание');
            console.log(newEdit);
            return this.todoItems.splice(itemId, 1, newEdit);
            
        }
    },
});


