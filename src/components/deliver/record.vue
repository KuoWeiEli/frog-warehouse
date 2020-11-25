<template>
  <div>
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="商品名稱">
        <el-select v-model="searchForm.id" placeholder="商品名稱" filterable clearable>
          <el-option label="1號商品" value="1"></el-option>
          <el-option label="2號商品" value="2"></el-option>
          <el-option label="3號商品" value="3"></el-option>
          <el-option label="4號商品" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
            v-model="searchForm.dateRange"
            type="daterange"
            start-placeholder="起始日"
            end-placeholder="結束日"
            :default-value="defaultDate">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查詢</el-button>
      </el-form-item>
    </el-form>
    <el-row class="export">
      <el-col>
        <el-button type="primary" @click="exportExcel">匯出Excel</el-button>
      </el-col>
    </el-row>

    <el-table
        :data="records"
        stripe
        style="width: 100%">
      <el-table-column
          prop="date"
          label="出貨日期"
          width="100">
      </el-table-column>
      <el-table-column
          prop="handler"
          label="經手人"
          width="80">
      </el-table-column>
      <el-table-column
          prop="productName"
          label="商品名稱"
          width="100">
      </el-table-column>
      <el-table-column
          prop="custNo"
          label="會員編號"
          width="100">
      </el-table-column>
      <el-table-column
          prop="custName"
          label="會員姓名"
          width="100">
      </el-table-column>
      <el-table-column
          align="center"
          prop="orderPoints"
          label="訂單點數"
          width="80">
      </el-table-column>
      <el-table-column
          align="center"
          prop="deliveryNum"
          label="出貨數量"
          width="80">
      </el-table-column>
      <el-table-column
          prop="memo"
          label="出貨備註"
          width="100">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="default" @click.native.prevent="openWorkDialog(scope.row)"
                     icon="el-icon-edit"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>


</template>

<script>
export default {
  name: 'deliverRecord',
  data() {
    return {
      searchForm: {
        id: '',
        dateRange: []
      },
      defaultDate: new Date(),
      records: {},

    }
  },
  beforeMount() {
    this.getRecords()
  },
  methods: {
    onSubmit() {
      console.log(this.searchForm.dateRange)
    },
    exportExcel() {
    },
    async getRecords() {
      const res = await fetch('http://localhost:3000/records')
      this.records = await res.json()
    },
    openWorkDialog() {}
  }
}
</script>

<style scoped>
.export {
  float: right;
}
</style>