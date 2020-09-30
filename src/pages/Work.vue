<template>
    <div>
        <el-button type="primary" @click="dialogVisible = true">点击打开弹窗</el-button>

        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="50%"
        min-height="300px"
        :before-close="handleClose">
        <el-checkbox-group v-model="checkList"  @change="checkChange">
            <el-checkbox v-for="item in checkBoxData" :key="item.id" :label="item.id">{{item.label}}</el-checkbox>
        </el-checkbox-group>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false;checkList=[]">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
        <br/>
        <div style="display:flex; width:50%;justify-content: space-between;margin: 20px;">
            <template  v-for="(item,index) in switchData" >
                <span :key="index">{{item.name}}:</span>
                <el-switch
                    :key="item.indexData"
                    v-model="item.status"
                    :active-value="0"
                    :inactive-value="1"
                    active-color="#13ce66"
                    @change="switchOnchange($event,item)"
                    inactive-color="#ff4949">
                </el-switch>
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        switchValue: "",
        switchData:[],
        dialogVisible: false,
        checkList: [],
        checkBoxData:[
            {
                id:1,
                label:"复选框 A",
                value:1
            },
            {
                id:2,
                label:"复选框 B",
                value:2
            },
            {
                id:3,
                label:"复选框 C",
                value:3
            }
        ]
      };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        checkChange(data) {
            this.checkList = data
            console.log(this.checkList,"checkList");
        },
        switchOnchange(e) {
            this.switchValue = e
            console.log(this.switchValue,"this.switchValue");
        }
    },
    mounted() {
        let attr2 = {
            key1:"一键",
            key2:"二键",
            key3:"三键",
            key4:"四键",
            key5:"五键",
            key6:"六键",
            // SW:"ON",
            // SW1:"OFF",
            // SW2:"OFF",
            // SW3:"OFF",
            // SW4:"ON",
            // SW5:"ON",
            // SW6:"OFF",
        }
        let arr = []
        for(let i in attr2) {
            let obj = {
                indexData:i,
                name:attr2[i],
                status:false,
            }
            arr.push(obj)
        }
        this.switchData = arr
        console.log(this.switchData,"this.switchData");
    },
  };
</script>

<style scoped>
.box{
     overflow: hidden;
}
</style>

