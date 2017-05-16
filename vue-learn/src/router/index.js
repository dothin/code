import Vue from 'vue'
import Router from 'vue-router'
const first = r => require.ensure([], () => r(require('../components/first')), 'first')
const second = r => require.ensure([], () => r(require('../components/second')), 'second')

// const second = resolve => require(['../components/second'], resolve)
// import first from '@/components/first'
// import second from '@/components/second'
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
  `
}
const query = {
    template: '<div> {{$route.query.plan}}</div>'
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
const Page404 = {
    template: '<div>404</div>'
}
export default new Router({
    mode:'history',
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
        path: '/query',
        name: 'query',
        component: query
    },  {
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
    }, {
        path: '/redirect',
        name: 'redirect',
        component: User,
        redirect:'/second'
    }, {
        path: '/redirect1',
        name: 'redirect1',
        component: User,
        redirect:'/user/bar'
    }, {
        path: '/redirect2/:id',
        name: 'redirect2',
        component: User,
        redirect:xxxx =>{
            const {hash, params, query} = xxxx;
            if(params.id === '001'){
                return '/params';
            }
        }
    }, {
        path: '*',//404一定要放到路由最后面
        component: Page404
    }]
})
