<template>
    <div class="login">
        <div class="background">
            <img :src="imgSrc" width="100%" height="100%" alt="背景图" />
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>登录系统</span>
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" >
                <el-form-item label="账号" prop="pass">
                    <el-input type="username" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }
        // else {
        //   if (this.ruleForm.checkPass !== '') {
        //     this.$refs.ruleForm.validateField('checkPass');
        //   }
          callback();
        // }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        // else if (value !== this.ruleForm.pass) {
        //   callback(new Error('两次输入密码不一致!'));
        // } else {
          callback();
        // }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        imgSrc:require('../assets/login.jpg'),
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let userName = this.ruleForm.pass
            let password = this.ruleForm.checkPass
            if(userName == "admin" && password == "123456") {
                sessionStorage.setItem("userName",userName)
                this.$router.push("/HelloWorld/work")
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>

<style scoped>
.login {
    height: 100%;
    width:100%;
}
.background{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
.clearfix{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}
.box-card {
    width: 480px;
    height: 300px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>