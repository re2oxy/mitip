new Vue({
    el: '#app',
    data: {
        tasks: [],
        inputText: "",
        tBacklog: [],
        tInProgress: [],
        tDone: [],
        isEdit: false,
        editID: 0,
        editType: 0,
        btnText: "Add Task",
    },
    methods: {
        chooseTask: function (id){
            const vm = this;
            if(!vm.isEdit) {
                let i = 0;
                vm.isEdit = true;
                vm.btnText = "Edit Task";
                while (id != vm.tasks[i].id) {
                    i++;
                }
                vm.tasks[i].classTask = "chosen";
                vm.inputText = vm.tasks[i].text;
                vm.editType = vm.tasks[i].type;
                vm.editID = id;
            }
        },
        createTask: function (){
            const vm = this;
            if(vm.isEdit){
                axios.put('/task/'+vm.editID+'/', {
                    text: vm.inputText,
                    type: vm.editType,
                 })
                    .then(function (response) {
                        console.log(response.data)
                        axios.get('/task/').then(function (response) {
                            console.log(response.data)
                            vm.tasks = response.data
                            vm.findTypes()
                        })
                })
            } else {
                axios.post('/task/', {
                    text: vm.inputText,
                    type: 1,
                })
                    .then(function (response) {
                        axios.get('/task/').then(function (response) {
                            console.log(response.data)
                            vm.tasks = response.data
                            vm.findTypes()
                        })
                    })
            }
        },
        deleteTask: function (id){
            const vm = this;
            console.log(id)
            axios.delete('/task/'+id).then(function (response) {
                console.log(response.data)
                axios.get('/task/').then(function (response) {
                    console.log(response.data)
                    vm.tasks = response.data
                    vm.findTypes()
                })
            })
        },
        findTypes: function (){
            const vm = this;
            vm.inputText = "";
            vm.btnText = "Add Task";
            vm.isEdit = false;
            vm.tBacklog = vm.tasks
            .filter(e => e.type === 1);
            vm.tInProgress = vm.tasks
            .filter(e => e.type === 2);
            vm.tDone = vm.tasks
            .filter(e => e.type === 3);
        },
        changeToBacklog(id){
            const vm = this;
            let i = 0;
            while(id != vm.tasks[i].id) {
                i++;
            }
            let text = vm.tasks[i].text;
            axios.put('/task/'+id+'/', {
                    text: text,
                    type: 1,
                 }).then(function (response) {
                        console.log(response.data)
                    axios.get('/task/').then(function (response) {
                        console.log(response.data)
                        vm.tasks = response.data
                        vm.findTypes()
                    })
                })
        },
        changeToProgress(id){
            const vm = this;
            let i = 0;
            while(id != vm.tasks[i].id) {
                i++;
            }
            let text = vm.tasks[i].text;
            axios.put('/task/'+id+'/', {
                    text: text,
                    type: 2,
                 }).then(function (response) {
                        console.log(response.data)
                    axios.get('/task/').then(function (response) {
                        console.log(response.data)
                        vm.tasks = response.data
                        vm.findTypes()
                    })
                })
        },
        changeToDone(id){
            const vm = this;
            let i = 0;
            while(id != vm.tasks[i].id) {
                i++;
            }
            let text = vm.tasks[i].text;
            axios.put('/task/'+id+'/', {
                    text: text,
                    legid: vm.legend,
                    type: 3,
                 }).then(function (response) {
                        console.log(response.data)
                    axios.get('/task/').then(function (response) {
                        console.log(response.data)
                        vm.tasks = response.data
                        vm.findTypes()
                    })
                })
        },
    },
    created: function () {
        const vm = this;
        isEdit = false;
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.get('/task/')
            .then(function (response) {
                console.log(response.data)
                vm.tasks = response.data
                vm.findTypes()
            })

    }
}
)