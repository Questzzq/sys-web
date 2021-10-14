import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Card } from 'antd'
import { getArticleContent } from '../../../services/article'

class MdReader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articleDetail: '',
        }
    }

    componentDidMount() {
        this.loadArticleContent(1)
    };

    loadArticleContent = (articleId) => {
        getArticleContent(articleId).then(res => {
            if(res.code === 200) {
                this.setState({
                    articleDetail: res.data.content
                })
            }
        })
    };

    render() {
        return (
            <Card>
                <ReactMarkdown 
                    escapeHtml={false}> 
                    {this.state.articleDetail}
                </ReactMarkdown>
            </Card>
        )
    }
}


export default MdReader;
