<template>
    <div class="team-info-wrap">
        <HeaderBar title="外协员工信息" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap" :style="{paddingTop: statusBarHeight + 'px'}">
            <div class="avatar-wrap">
                <img :src="teamDetail.photos" @error="imgError">
            </div>
            <div class="team-info-content">
                <ListCell name="姓名" :value="teamDetail.name || '无'">
                    <img src="../../../static/icons/team_info_icon1.png" style="width: 24rpx;height: 26rpx">
                </ListCell>
                <ListCell name="身份证号码" :value="teamDetail.identity || '无'">
                    <img src="../../../static/icons/team_info_icon2.png" style="width: 30rpx;height: 26rpx">
                </ListCell>
                <!-- <ListCell name="员工卡号" :value="teamDetail.card_number">
                    <img src="../../../static/icons/team_info_icon3.png" style="width: 23rpx;height: 28rpx">
                </ListCell> -->
                <ListCell name="职业资格" :value="teamDetail.qualification || '无'">
                    <img src="../../../static/icons/team_info_icon4.png" style="width: 27rpx;height: 24rpx">
                </ListCell>
                <ListCell name="外协单位" :value="teamDetail.company || '无'">
                    <img src="../../../static/icons/team_info_icon5.png" style="width: 23rpx;height: 31rpx">
                </ListCell>
                <ListCell name="闸机权限" :value="teamDetail.gate_authority || '无'">
                    <img src="../../../static/icons/team_info_icon6.png" style="width: 29rpx;height: 29rpx">
                </ListCell>
                <ListCell name="闸机权限有效期" :value="dateFormat(teamDetail.validity*1000, 'YYYY-MM-DD') || '无'">
                    <img src="../../../static/icons/team_info_icon7.png" style="width: 25rpx;height: 27rpx">
                </ListCell>
            </div>
            <div class="team-info-keep-title">近期过闸记录</div>
            <div class="team-info-keep-content">
                <div v-for="(item, index) in keepDetail" :key="index">
                    <p>{{item.time}}</p>
                    <p>{{item.place}}</p>
                    <p>{{item.state}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
