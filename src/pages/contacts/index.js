import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            ipconfig: apiconf.domainIp,
            typeIndex: 1,
            department: '',
            pageCount: 0,
            page: 1,
            tabs: [
                {
                    title: '外协员工',
                    active: true
                },
                {
                    title: '内部员工',
                    active: false
                }
            ],
            departmentIndex: -1,
            departments: ['设备管理部', '运行部'],
            users: [
                // {
                //     avatar: '',
                //     name: '中国人',
                //     department: '设备管理部',
                //     phone: '13811013210'
                // },
            ]
        }
    },
    components: {
        HeaderBar,
    },
    onPullDownRefresh() {
        this.getTabDatas();
    },
    methods: {
        getStaffPhone(type,department) {
            const params = {
                type: type || 1,
            }
            if(department) {
                params.department = department
            }
            if(this.page == 1) {
                this.users = []
            }
            wx.showLoading({
                title: '加载中',
              })
            api.getStaffPhone(params).then(res => {
                console.log("获取通讯录",res)
                wx.hideLoading()
                // this.users = []
                this.pageCount = Math.ceil(res.data.length/50)
                this.users[this.page - 1] = []
                res.data.forEach((item,index)=>{
                    item.photos = `http://47.112.104.43${item.photos}`
                    // item.photos2 = `http://47.112.104.43${item.photos}`
                    // item.photos = this.ipconfig + item.photos
                    // this.users.push(item)
                    if(this.page > this.pageCount ) {
                        return
                    }
                    if(index < this.page * 50 && index >= (this.page - 1) * 50) {
                        this.users[this.page - 1].push(item)
                    }
                    if(this.users[this.page - 1].length >= 50) {
                        return
                        // this.page = this.page + 1
                        // this.users[this.page - 1] = []
                    }

                })
                // this.users = [...res.data]
                // console.log("...",this.users,this.users[this.page - 1].length)

                                
            })
        },
        allScrollData() {
            if(this.page < this.pageCount ) {
                this.page = this.page + 1
                this.getStaffPhone(this.typeIndex,this.departments[this.departmentIndex])
            }
            
            console.log("...",this.pageCount,this.users)
            // this.users[this.page - 1] = []

        },
        imgError(indexs,index) {
            // this.users[indexs][index].photos = this.users[indexs][index].photos2
            // console.log("...",this.users[indexs][index].photos,this.users[indexs][index].photos2)
        },
        getAllDepartmentList() {
            api.getAllDepartmentList().then(res => {
                console.log("获取全部部门",res)
                this.departments = []
                res.data.forEach(item => {
                    this.departments.push(item.department)
                });
            })
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        switchTab(tab, index) {
            this.tabs.forEach((item, i) => item.active = index === i);
            this.tabs = [...this.tabs];
            let type = index == 0 ? 1 : 2
            this.typeIndex = type
            this.departmentIndex = -1
            this.users = []
            this.page = 1
            this.pageCount = 0
            this.getStaffPhone(type,"")

        },
        departmentChange(e) {
            const { detail } = e.mp;
            this.departmentIndex = detail.value;
            this.users = []
            this.page = 1
            this.getStaffPhone(this.typeIndex,this.departments[this.departmentIndex])
        }
    },
    onLoad() {
        this.getStaffPhone(1,"")
        this.getAllDepartmentList()
    },
}