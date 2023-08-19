<template>
    <div class="login-page">
        <div class="container">
            <el-card class="login-container">
                <div class="title-container">
                    <h2 class="login-title">湿垃圾设备远程监控可视化系统</h2>
                </div>
                <el-form :model="form" :rules="rules" class="form-container">
                    <div class="input-container">
                        <el-form-item prop="username">
                            <el-input v-model="form.username" placeholder="请输入用户名" class="input-field"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="form.password" type="password" placeholder="请输入用户密码"
                                class="input-field"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item style="text-align: center;">
                        <el-button type="primary" @click="submit" class="login-button">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>
  
  

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
export default {
    name:'LoginView',
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, trigger: 'blur', message: '请输入用户名' }
                ],
                password: [
                    { required: true, trigger: 'blur', message: '请输入密码' }
                ]
            }
        }
    },
    methods: {
        submit() {

            if (this.form.username === 'admin' && this.form.password === '111') {
                const token = Mock.Random.guid()
                //token信息存入cookie用于不同页面间的通信
                Cookie.set('token', token)
                this.$router.push('/rtmonitor')
            }
            else {
                localStorage.removeItem('token')
            }

        }
    }
}
</script>


<style lang="less" scoped>
.login-page {
    background-image: url("~@/assets/loginBg.png");
    padding: 0;
    margin: 0;
    height: 100%;
}

.container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    margin-top: 0;
    margin-right: 200px;
}

.input-field {
    width: 220px;
}

.login-container {
    width: 400px;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;

    .el-card__header {
        padding: 10px;
        text-align: center;
    }

    .el-card__body {
        padding: 0 35px 35px;
    }

    .login-title {
        margin-bottom: 20px;
    }
}

.title-container {
    text-align: center;
    margin-bottom: 20px;
}

.login-button {
    width: 220px;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}</style>