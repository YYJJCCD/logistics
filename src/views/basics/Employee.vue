<template>
  <div>
    <a-button size="large" class="editable-add-btn" @click="visible = true">
      <a-icon type="plus" />
      新增员工
    </a-button>
    <a-table :loading="loading" :columns="columns" :data-source="data" bordered rowKey="id">
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <a-button type="link" @click="handleUpdate(record), opType = 'update'">
            <a-icon type="edit" /> 修改
          </a-button>
          <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm(record.id)">
            <template slot="title">
              <p> 删除人员信息后将无法恢复，确定要删除吗？ </p>
            </template>
            <a-button type="link">删除</a-button>
          </a-popconfirm>
        </div>
      </template>
    </a-table>

    <a-modal title="Title" :visible="visible" @ok="submitForm" @cancel="visible = false">
      <a-form-model :model="form">
        <a-form-model-item label="姓名">
          <a-input v-model="form.name" placeholder="请输入员工姓名" />
        </a-form-model-item>
        <a-form-model-item label="身份证号">
          <a-input v-model="form.idc" placeholder="请输入员工身份证信息" />
        </a-form-model-item>
        <a-form-model-item label="联系方式">
          <a-input v-model="form.phone" placeholder="请输入手机号码" />
        </a-form-model-item>
        <a-form-model-item label="邮箱">
          <a-input v-model="form.email" placeholder="请输入邮箱" />
        </a-form-model-item>
        <a-form-model-item label="所在仓库">
          <a-select :default-value="storageList[0].storageName" :value="form.storage.storageName">
            <a-select-option v-for="(record, index) in storageList" :key="index" @click="onChange(record)" >{{ record.storageName }}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="性别">
          <a-radio-group v-model="form.sex">
            <a-radio value="男性">男性</a-radio>
            <a-radio value="女性">女性</a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="家庭住址">
          <a-input v-model="form.address" type="textarea" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>

  </div>
</template>

<script>
  import * as api from "@/api/employee"
  import { findAll } from "@/api/storage"

  const columns = [
    {
      title: "名字",
      dataIndex: "name",
    },
    {
      title: "性别",
      dataIndex: "sex",
    },
    {
      title: "邮箱",
      dataIndex: "email",
    },
    {
      title: "所在部门",
      dataIndex: "storage.storageName",
    },
    {
      title: "联系电话",
      dataIndex: "phone",
    },
    {
      title: "身份证",
      dataIndex: "idc",
    },
    {
      title: "家庭住址",
      dataIndex: "address",
    },
    {
      title: "操作",
      dataIndex: "operation",
      scopedSlots: { customRender: "operation" },
    },
  ]

  export default {
    data() {
      return {
        loading: false,
        storageList: [{ storageName: "", id: "" }],
        form: {
          name: "",
          sex: "男性",
          phone: "",
          storage: {
            id:"",
            storageName: ""
          },
          address: "",
        },
        visible: false,
        data: [],
        columns,
        editingKey: "",
      }
    },
    mounted() {
      this.loadTableData()
    },
    methods: {

      findAllStorage() {
        findAll().then((res) => {
          this.storageList = res.data
          // this.form.storage = this.storageList[0]
        })
      },

      loadTableData() {
        this.loading = true
        this.findAllStorage()

        api.findAll().then((res) => {
          if (res.status) {
            this.data = res.data
            console.log(this.data)
          }
          setTimeout(() => {
            this.loading = false
          }, 600)
        })
      },

      submitForm() {
        console.log('12321')
        console.log(this.form)
        api.save(this.form).then((res) => {
          if (res.status) this.$message.success("员工信息提交成功")
          this.visible = false
          this.loadTableData()
        })
      },

      handleUpdate(value, id, column) {
        this.form = JSON.parse(JSON.stringify(value));
        this.visible = true
        console.log('21321')
        console.log(this.form )
      },

      confirm(id) {
        api.deleteById(id).then((res) => {
          if (res.status) this.$message.success("Delete success")
          this.loadTableData()
        })
      },
      onChange(record){
        console.log(record)
        this.form.storage = record
        console.log('change')
        console.log(this.form) 
      },
    
    },
  }
</script>
<style scoped>
  .editable-add-btn {
    margin-bottom: 15px
  }

  .editable-row-operations a {
    margin-right: 8px
  }
</style>