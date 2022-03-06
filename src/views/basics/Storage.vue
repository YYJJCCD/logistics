<template>
  <div>
    <a-spin size="large" :spinning="spinning">
      <a-row :gutter="20">
        <a-col :span="8" class="item">
          <a-card hoverable class="add-item" @click="visible = true, typeStorage = '添加仓库'">
            <a-icon type="plus" />
            添加仓库
          </a-card>
        </a-col>
        <a-col :span="8" v-for="(item, index) in this.data" :key="index" class="item">
          <a-card hoverable>
            <template slot="actions" class="ant-card-actions">
              <span>
                <a-icon type="user" /> 负责人: {{ item.leaderName }}
              </span>
              <span>
                <router-link :to="'/storage/' + item.id">
                  <a-icon type="bar-chart" /> 库存管理
                </router-link>
              </span>
              <a-button type="link" class="abutton" size="small" @click="visible = true, typeStorage = '修改仓库', form.id = item.id, form.storageName = item.storageName">
                <a-icon type="form" /> 修改仓库
              </a-button>
              <a-button type="link" size="small" class="abutton" @click="deleteById(item.id)">
                <a-icon type="delete" /> 删除
              </a-button>
            </template>
            <a-card-meta :title="item.storageName" :description="'ID: ' + item.id">
              <img class="image" slot="avatar" :src="imgList[parseInt('0x'+item.id[0]) % 5]" alt="" />
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-spin>

    <a-modal :title="typeStorage" :visible="visible" @ok="submit" @cancel="visible = false">
      仓库名称：
      <a-input v-model="form.storageName" style="width: 300px;margin-bottom: 20px"></a-input><br />
      负责人：
      <a-cascader v-model="form.leader" :options="options" :show-search="{ filter }" placeholder="Please select"
        style="width: 300px;margin-bottom: 20px; margin-left: 14px;" @change="onChange" />
    </a-modal>


  </div>
</template>

<script>
  import * as api from "@/api/storage";

  export default {
    name: "storage",
    data() {
      return {
        visible: false,
        form: { id: "", leader: [], storageName: "" },
        spinning: false,
        data: [],
        options: [],
        imgList: [
          require("../../assets/storage0.svg"),
          require("../../assets/storage1.svg"),
          require("../../assets/storage2.svg"),
          require("../../assets/storage3.svg"),
          require("../../assets/storage4.svg"),
          require("../../assets/storage5.svg")
        ],
        typeStorage: "添加仓库"
      }
    },

    mounted() {
      this.loadData()
    },

    methods: {

      loadData() {
        this.spinning = true
        api.findAll().then((res) => {
          if (res.status) {
            this.data = res.data
            console.log(this.data)
            let s = 0;
            this.options = []
            for (let i = 0; i < this.data.length; i++) {
              if (this.data[i].employeeList.length === 0) continue;
              this.options.push({
                value: this.data[i].storageName,
                label: this.data[i].storageName,
                children: []
              })
              for (let j = 0; j < this.data[i].employeeList.length; j++) {
                this.options[s].children.push({
                  id: this.data[i].employeeList[j].id,
                  value: this.data[i].employeeList[j].name,
                  label: this.data[i].employeeList[j].name
                })
              }
              s += 1
            }
            console.log(this.options)
          }
          setTimeout(() => {
            this.spinning = false
          }, 600)
        })
      },
      deleteById(id) {
        api.deleteById(id).then((res) => {
          if (res.status) {
            this.loadData()
          }
        })
      },

      submit() {
        console.log("fuckkkkkkkkkkkk ")
        console.log(this.form)
        let postData = {
          id: this.form.id,
          leaderName: '',
          storageName: this.form.storageName
        }
        if(this.form.leader.length === 2 ) {
          postData.leaderName = this.form.leader[1]
        }
        api.save(postData).then((res) => {
          if (res.status) this.$message.success("添加成功")
          this.visible = false
          this.loadData()
        })
      },
      filter(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
      },
      onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
      },
    },

  }
</script>

<style scoped>
  .add-item {
    text-align: center;
    line-height: 120px;
    min-height: 120px;
    border: 1px dashed #91949c;
  }

  .add-item:hover {
    border: 1px dashed #5a84fd;
    color: #5a84fd;
  }

  .item {
    margin-bottom: 20px;
  }

  .image {
    width: 80px;
    height: 80px;
  }

  .abutton {
    color: rgba(0, 0, 0, 0.45);
  }

  .abutton:hover {
    color: #1890ff;
  }
</style>