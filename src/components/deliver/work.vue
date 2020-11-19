<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="商品名稱">
        <el-select v-model="form.productName" placeholder="商品名稱">
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
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          prop="productName"
          label="商品名稱"
          width="180">
      </el-table-column>
      <el-table-column
          prop="region"
          label="地區"
          width="180">
      </el-table-column>
      <el-table-column
          prop="counts"
          label="庫存數量"
          width="180">
      </el-table-column>
      <el-table-column
          prop="memo"
          label="商品備註"
          width="180">
      </el-table-column>
      <el-table-column>
        <el-button type="primary" @click="onSubmit" icon="el-icon-shopping-cart-2"></el-button>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  name: "deliverWork",
  data() {
    return {
      form: {
        productName: ''
      },
      tableData: [{
        productName: '4號商品',
        region: '台北',
        counts: 200,
        memo: ''
      },{
        productName: '3號商品',
        region: '台北',
        counts: 150,
        memo: '滿100元贈品'
      },{
        productName: '2號商品',
        region: '台北',
        counts: 168,
        memo: '現場點收短缺3個'
      },{
        productName: '1號商品',
        region: '台中',
        counts: 99,
        memo: ''
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('查詢!');
    }
  }
}
</script>

<style scoped>

</style>