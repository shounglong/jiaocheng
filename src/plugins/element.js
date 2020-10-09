import Vue from 'vue'
//借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的
import {
    Button, Form, FormItem, Input, Pagination, Tooltip, Message, Container, Header, Avatar, Badge, Radio, RadioGroup, Image,
    Aside, Main, Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem, Card, Row, Col, Dropdown, DropdownItem, DropdownMenu,
    Table, TableColumn, Switch, Dialog, MessageBox, Tag, Tree, Select, Option, DatePicker, InputNumber, ColorPicker, RadioButton
    , Drawer, Divider, InfiniteScroll, Backtop, Notification, Tabs, TabPane, Popover, Link
} from 'element-ui'
//Eliement全局使用导入的组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(InputNumber)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Avatar)
Vue.use(Badge)
Vue.use(ColorPicker)
Vue.use(RadioButton)
Vue.use(Image)
Vue.use(Drawer)
Vue.use(Divider)
Vue.use(InfiniteScroll)
Vue.use(Backtop)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Popover)
Vue.use(Link)
/* 全局挂载message */
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
//二次封装Notification提示框插件
Vue.prototype.$tip = function (type, message, title) {
    return Notification({
        type: type,
        position: "bottom-right",
        title: title == null ? "提示" : title,
        message: message,
        offset: 50
    })
}