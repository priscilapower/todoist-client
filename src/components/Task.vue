<template lang="pug">
.task-box
  table.table.task-table.mt-3
    tbody
      tr(v-for='task in tasks' :key='task._id' @mouseover='showDelete=task._id' @mouseout='showDelete=null')
        td.checkbox-td
          img.pointer(v-show='!task.completed' @click='updateStatus(task._id)' src='../assets/icon,checkbox,default.png')
          img.pointer(v-show='task.completed' @click='updateStatus(task._id)' src='../assets/icon,checkbox,active.png')
        td(:class="task.completed ? 'completed' : ''") {{task.description}}
        td.delete-td
          img.pointer(v-show='showDelete === task._id' @click='deleteTask(task._id)' src='../assets/icon,delete.png')

  .create-task.pointer.button-add(v-show='!showTaskForm' @click='showForm(true)')
    img(src='../assets/icon,add,red.png')
    span.add-span 작업 추가

  .task-form(v-show='showTaskForm')
    input.form-control.task-input(v-model='task' type='text' placeholder='예. 매일 독서 p3 @목표#공부' v-on:keyup.enter='submitTask')
    div
      button.btn.rounded-4.submit-button(@click='submitTask' :disabled='task.length === 0') 작업 추가
      button.btn.rounded-4.cancel-button(@click='cancelTask') 취소

.no-content(v-show='tasks.length === 0')
  span.msg-1 할 일이 없습니다
  span.msg-2 남은 하루도 즐겁게 보내세요.

</template>

<script>
import axios from "axios";

export default {
  name: "TodoTask",

  data(){
    return {
      task: "",
      tasks: [],
      showTaskForm: false,
      showDelete: null,
      apiHost: process.env.VUE_APP_API_HOST
    }
  },

  async created() {
    try{
      const res = await axios.get(this.apiHost + "/task");
      this.tasks = res.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async submitTask(){
      const res = await axios.post(this.apiHost + "/task", {
        description: this.task
      });

      this.tasks = [...this.tasks, res.data];
      this.task = "";
    },

    showForm(showTaskForm) {
      this.showTaskForm = showTaskForm;
    },

    cancelTask() {
      this.task = "";
      this.showForm(false);
    },

    deleteTask(id){
      axios.delete(this.apiHost + `/task/${id}`)
      this.tasks = this.tasks.filter(task => task._id !== id);
    },

    async updateStatus(id){
      let currentTask = this.tasks.filter(task => task._id === id);

      if(currentTask.length !== 0){
        let status = currentTask[0].completed !== true;

        let updatedTask = {
          description: currentTask[0].description,
          completed: status
        };

        await axios.put(this.apiHost + `/task/${id}`, updatedTask);

        this.tasks = this.tasks.map((task) => {
          if (task._id === id) {
            task.completed = updatedTask.completed;
          }
          return task;
        });

        if(status){
          this.makeToast();
        }

      }
    },

    makeToast() {
      this.$toast.open({
        message: "1작업을 완료했습니다",
        duration: 2000,
        dismissible: true,
        position: "bottom",
        type: "is-white"
      });
    }
  }
}
</script>

<style scoped>
.task-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.task-table {
  border-left: none;
  border-right: none;
  border-top: none;
  margin-bottom: 4px;

  color: #202020;
}

.checkbox-td {
  width: 30px;
}

.delete-td {
  width: 30px;
}

.completed {
  color: #A5A5A5;
}

.task-input {
  line-height: 2;
  border-radius: 8px;
  margin-bottom: 4px;
}

.task-form {
  width: 100%;
}

.submit-button {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;

  width: 74px;
  height: 32px;
  left: 0px;
  top: 0px;

  background: #CB5647;
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  color: #FFFFFF;

  flex: none;
  order: 0;
  flex-grow: 0;
}

.cancel-button {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 46px;
  height: 32px;
  left: 86px;
  top: 0px;

  border: 1px solid #D6D6D6;
  box-sizing: border-box;
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;

  color: #1F1F1F;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 12px;
}

.cancel-button:hover {
  background-color: #D7D5D5;
}

.btn:disabled {
  background: #EABBB5;
}

.no-content {
  flex-direction: column;
  margin-top: 35%;
}

.msg-1 {
  display: table;
  margin: 0 auto;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
}

.msg-2 {
  display: table;
  margin: 0 auto;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  color: #777777;
}

.create-task {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;

}

.add-span {
  position: static;
  width: 75px;
  height: 21px;
  left: 30px;
  top: 10.5px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #808080;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
}

.button-add {
  margin: 0px 8px;
}

.button-add:hover {
  color: #CC5642;
}

.pointer {
  cursor: pointer;
}

</style>
