import Login from "../pages/Login";
import ArticleList from "../pages/admin/articles/ArticleList";
import Comments from "../pages/admin/articles/Comments";
import PageNotFound from "../pages/PageNotFound";
import CardList from "../pages/admin/dashboard/CardList";
import ArticleEdit from "../pages/admin/articles/ArticleEdit";

export const mainRoutes = [
    {
        path: '/login',
        component: Login,
        title: '登录',
        isShow: true
    },
    {
        path: '/404',
        component: PageNotFound
    }
];

export const adminRoutes = [
    {
        path: '/admin/articleList',
        title: '文章列表',
        component: ArticleList,
        icon: 'RocketOutlined',
        exact: true,
        isShow: true
    },
    {
        path: '/admin/articles/:id',
        title: '文章编辑',
        component: ArticleEdit,
        icon: 'RocketOutlined',
        exact: true,
        isShow: true
    },
    {
        path: '/admin/comments',
        component: Comments,
        title: '评论',
        icon: 'SelectOutlined',
        isShow: true
    },
    {
        path: '/dashboard/cardList',
        component: CardList,
        icon: 'SolutionOutlined',
        title: '卡片列表',
        isShow: true
    }
];

