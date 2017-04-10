import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import second from '@/components/second'
Vue.use(Router)
const firstChild1 = {
    template: '<div>first/child1</div>'
}
const firstChild2 = {
    template: '<div>first/child2</div>'
}
const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `,
    watch: {
        '$route' (to, from) {
            // 对路由变化作出响应...
            console.log(from)
            console.log(to)
        }
    }
}
const UserHome = {
    template: '<div>Home</div>'
}
const UserProfile = {
    template: '<div>Profile</div>'
}
const UserPosts = {
    template: '<div>Posts</div>'
}
const params = {
    template: '<div>params {{$route.params.id}}</div>'
}
export default new Router({
    routes: [{
        path: '/first',
        name: 'first',
        component: first,
        children: [{
            path: 'child1', //子路由第一个元素不要加斜杠，如/child1->child1
            component: firstChild1
        }, {
            path: 'child2',
            component: firstChild2
        }]
    }, {
        path: '/second',
        name: 'second',
        component: second
    }, {
        path: '/params',
        name: 'params',
        component: params
    }, {
        path: '/user/:id',
        name: 'user',
        component: User,
        children: [{
            path: '',
            component: UserHome
        }, {
            path: 'profile',
            component: UserProfile
        }, {
            path: 'posts',
            component: UserPosts
        }]
    }]
})
