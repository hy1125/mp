<template>
   <div class="my-wrap"> 
       <HeaderBar title="我的账号" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
       <div class="page-wrap">
           <div class="my-info-cell border-bottom border-top">
               <div class="avatar-wrap">
                   <img src="/static/avatar.png">
               </div>
               <div class="my-info-content">
                    <div class="my-info-name">{{userInfo.userName}}</div>
                    <div class="my-info-role">员工</div>
               </div>
           </div>
           <div class="my-info-listcell border-bottom border-top">
               <ListCell name="设置" :isLink="true" :noBorder="true" @onPress="setting"></ListCell>
           </div>
       </div>
   </div>
</template>

<script src="./index.js"></script>

<style lang="less">
.my-wrap {
    .my-info-cell {
        width: 100%;
        background-color: #fff;
        height: 56px;
        align-items: center;
        &:active {
            background-color: #f2f2f2;
        }
        .avatar-wrap {
            height: 40px;
            width: 70px;
            justify-content: center;
            align-items: center;
            img {
                height: 40px;
                width: 40px;
                display: flex;
                display: -webkit-flex;
                border-radius: 40px;
            }
        }
        .my-info-content {
            height: 56px;
            flex: 1;
            justify-content: center;
            flex-direction: column;
            .my-info-name {
                font-size: 14px;
                color: #333;
            }
            .my-info-role {
                font-size: 12px;
                color: #999;
            }
        }
    }
    .my-info-listcell {
        width: 100%;
        background-color: #fff;
        margin-top: 15px;
    }
}
</style>
