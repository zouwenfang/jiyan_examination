<template>
	<div>
		<div class="aui-content aui-margin-b-15 kk-login">
	        <ul class="aui-list aui-form-list aui-margin-t-15">
	            <li class="aui-list-item">
	                <div class="aui-list-item-inner">
	                    <div class="aui-list-item-label-icon">
	                        <i class="aui-iconfont aui-icon-mobile"></i>
	                    </div>
	                    <div class="aui-list-item-input">
	                        <input type="text" v-model="usernameModel" placeholder="请输入用户名">
	                    </div>
	                    
	                </div>
	            </li>
	            <li class="aui-list-item">
	                <div class="aui-list-item-inner">
	                    <div class="aui-list-item-label-icon">
	                        <i class="aui-iconfont aui-icon-lock"></i>
	                    </div>
	                    <div class="aui-list-item-input">
	                        <input type="password"  v-model="passwordModel" placeholder="请输入密码">
	                    </div>
	                    
	                </div>
	            </li>
	            <li class="aui-list-item kk-a">
	                <div class="aui-list-item-inner aui-list-item-center aui-list-item-btn">
	                    <div class="aui-btn aui-btn-info aui-font-size-16" @click="register">注册</div>
	                </div>
	            </li>
	        </ul>
	    </div>
	    <span class="g-form-error">{{ userErrors.errorText }}</span>
		<span class="g-form-error">{{ passwordErrors.errorText }}</span>
		<p>{{ errorText }}</p>
	</div>
	
    
</template>

<script>
	export default {
		data() {
			return {
				usernameModel: '',
				passwordModel: '',
				errorText: '',
				newsList: []
			}
		},
		computed: {
			userErrors() {
				let errorText, status
				if(!/^[a-zA]{1,30}$/g.test(this.usernameModel)) {
					status = false
					errorText = '只能输入1-30个以字母开头的字串'
				} else {
					status = true
					errorText = ''
				}
				if(!this.userFlag) {
					errorText = ''
					this.userFlag = true
				}
				return {
					status, //status:status
					errorText
				}
			},
			passwordErrors() {
				let errorText, status
				if(!/^(\w){6,20}$/g.test(this.passwordModel)) {
					status = false
					errorText = '只能输入6-20个字母、数字、下划线'
				} else {
					status = true
					errorText = ''
				}
				if(!this.passwordFlag) {
					errorText = ''
					this.passwordFlag = true
				}
				return {
					status,
					errorText
				}
			}
		},
		methods: {
			register() {
				//获取用户名和密码，通过this获取
				console.log(this.usernameModel, this.passwordModel)
				if(!this.userErrors.status || !this.passwordErrors.status) {
					this.errorText = '输入不能为空'
				} else {
					this.errorText = ''
					//      console.log('login')
					this.$http.post('http://localhost:8080/api/noUser',{username:this.usernameModel,password:this.passwordModel})
						.then((res) => {
							this.$router.push({
								name: 'login'
							})
						}, (err) => {
							//后台返回的data = {code:"状态码",msg:"返回信息"}
							var json_data =JSON.parse(res.bodyText)
							alert(res.body.data.msg);
							
						})
				}
			}
		}
	}
</script>

<style>
</style>