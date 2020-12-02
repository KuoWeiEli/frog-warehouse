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
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查詢</el-button>
      </el-form-item>
    </el-form>

    <el-table
        :data="products"
        stripe
        style="width: 100%">
      <el-table-column
          prop="Name"
          label="商品名稱"
          width="180">
      </el-table-column>
      <el-table-column
          prop="City"
          label="地區"
          width="180">
      </el-table-column>
      <el-table-column
          prop="Quantity"
          label="庫存數量"
          width="180">
      </el-table-column>
      <el-table-column
          prop="Remarks"
          label="商品備註"
          width="180">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="openWorkDialog(scope.row)"
                     icon="el-icon-shopping-cart-2"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="workDialogVisible">
      <div slot="title" class="dialog-title">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="8"><h1>{{ workData.productName }}</h1></el-col>
          <el-col :span="8">{{ workData.region }}</el-col>
          <el-col :span="8">{{ workData.counts }}</el-col>
        </el-row>
      </div>
      <el-form :model="workForm">
        <el-form-item label="會員編號" :label-width="formLabelWidth">
          <el-input v-model="workForm.custNo" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="會員姓名" :label-width="formLabelWidth">
          <el-input v-model="workForm.custName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="訂單點數" :label-width="formLabelWidth">
          <el-input v-model="workForm.orderPoints" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出貨數量" :label-width="formLabelWidth">
          <el-input v-model="workForm.deliveryNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出貨備註" :label-width="formLabelWidth">
          <el-input
              type="textarea"
              :rows="2"
              v-model="workForm.memo">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="workDialogVisible = false">取消出貨</el-button>
        <el-button type="primary" @click="workDialogVisible = false">確認出貨</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "deliverWork",
  created() {
    console.log(`createdd`)
    this.getProducts()

    // this.getRecords()
  },
  data() {
    return {
      searchForm: {
        id: ''
      },
      products: [],
      workDialogVisible: false,
      workForm: {
        custNo: '',
        custName: '',
        orderPoints: '',
        deliveryNum: '',
        memo: ''
      },
      formLabelWidth: '120px',
      workData: {}
    }
  },
  beforeMount() {
  },
  methods: {
    onSubmit() {
      this.getProducts(this.searchForm.id)
    },
    openWorkDialog(row) {
      this.workDialogVisible = true
      this.workData = row
    },
    async getProducts(id) {
      // const res = await fetch(`http://localhost:3000/products${id ? ('?id=' + id) : ''}`)
      // const res = await fetch(`http://pei.usa543.com:96/Store/Api/Product/ProductList${id ? ('?id=' + id) : ''}`)
      // const obj = await res.json()
      // this.products = obj.data.Data
      console.log(`id: ${id}`)
      axios.get(`http://pei.usa543.com:96/Store/Api/Product/ProductList${id ? ('?Id=' + id) : ''}`)
          .then(response => {
            console.log(response.data.Data)
            this.products = response.data.Data
      })
    }
  }
}
</script>

<style scoped>

</style>