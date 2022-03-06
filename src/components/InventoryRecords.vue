<template>
  <div>
    <download-excel
        class="export-excel-wrapper"
        :data="data"
        :fields="json_fields"
        name="出入库记录.xls">
      <a-button class="btn" icon="download" type="primary">下载Excel表格</a-button>
    </download-excel>
    <a-table :columns="columns" :data-source="data" rowKey="id" bordered>
    </a-table>
  </div>
</template>

<script>
import {findAllRecoedByStorageId} from "@/api/inventory";

const columns = [
  {
    dataIndex: "commodityId",
    key: "commodityId",
    title: "商品id",
  },
  {
    dataIndex: "commodityName",
    key: "commodityName",
    title: "商品名",
  },
  {
    title: "数量",
    dataIndex: "count",
    key: "count",
    sorter: (a, b) => a.count - b.count,
  },
  {
    title: "时间",
    dataIndex: "createAt",
    key: "createAt",
  },
  {
    title: "类型",
    key: "type",
    dataIndex: "type",
    filters: [
      { text: "出库", value: "出库" },
      { text: "入库", value: "入库" },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
  {
    title: "备注",
    dataIndex: "description",
    key: "description",
  },
];

export default {

  props: {
    data: {type: Array, default: []},
  },

  data() {
    return {
      columns,
      json_fields: {
        "商品ID": "commodityId",
        "商品名称": "commodityName",
        "类型": "type",
        "数量": "count",
        "备注": "description",
        "时间": "createAt",
      },
    }
  },

}
</script>

<style scoped>
.btn {
  margin-bottom: 15px;
  letter-spacing: 1px;
}
</style>